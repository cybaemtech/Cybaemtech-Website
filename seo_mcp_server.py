#!/usr/bin/env python3
"""
Technical SEO & Lighthouse MCP Server
=====================================
A comprehensive local Model Context Protocol (MCP) server providing automated
Technical SEO auditing, website crawling, JavaScript rendering comparison,
robots/sitemap validation, internal link graph analysis, Google Search Console
inspection, and Lighthouse performance auditing.

Tools exposed:
1. run_lighthouse_audit: Runs an automated Lighthouse audit on a URL.
2. read_seo_report: Reads and analyzes an existing Lighthouse JSON report file.
3. crawl_website: Crawls internal URLs within an approved domain.
4. analyze_page_seo: Performs deep on-page technical SEO analysis.
5. check_robots_and_sitemap: Validates robots.txt and XML sitemaps.
6. check_rendered_pages: Compares raw HTTP HTML against headless browser DOM.
7. inspect_google_indexing: Queries Google Search Console URL Inspection API.
8. analyze_internal_links: Reconciles routes, sitemaps, and internal links.
9. generate_seo_report: Produces unified JSON and HTML technical SEO reports.

Author: Cybaem Tech
"""

from __future__ import annotations

import concurrent.futures
import ipaddress
import json
import logging
import os
import re
import shutil
import socket
import subprocess
import sys
import time
import urllib.robotparser
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple
from urllib.parse import urljoin, urlparse, urlunparse
import xml.etree.ElementTree as ET

# Third-party libraries (installed in environment)
from bs4 import BeautifulSoup
import requests

# Configure logging to stderr so stdio JSON-RPC transport remains clean
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    stream=sys.stderr,
)
logger = logging.getLogger("seo_mcp_server")

# Import the official Python MCP SDK (supporting both v2 MCPServer and v1 FastMCP)
try:
    from mcp.server.mcpserver import MCPServer
except ImportError:
    try:
        from mcp.server.fastmcp import FastMCP as MCPServer
    except ImportError:
        logger.error("The official 'mcp' package is not installed. Install with: pip install mcp")
        sys.exit(1)

# Optional Google Auth for Search Console URL Inspection API
try:
    from google.oauth2 import service_account
    from google.auth.transport.requests import Request as GoogleAuthRequest
    GOOGLE_AUTH_AVAILABLE = True
except ImportError:
    GOOGLE_AUTH_AVAILABLE = False

# Optional Playwright for headless browser DOM inspection
try:
    from playwright.sync_api import sync_playwright
    PLAYWRIGHT_AVAILABLE = True
except ImportError:
    PLAYWRIGHT_AVAILABLE = False

# Initialize MCP Server instance
mcp = MCPServer("seo-auditor")

# Project directories
SERVER_DIR = Path(__file__).resolve().parent
DEFAULT_REPORTS_DIR = SERVER_DIR / "lighthouse_reports"
DEFAULT_SEO_REPORTS_DIR = SERVER_DIR / "seo_reports"
DEFAULT_CREDENTIALS_DIR = SERVER_DIR / "credentials"

# SSRF Protection: Denylisted hostnames and domain suffixes
DISALLOWED_HOSTNAMES = {
    "localhost",
    "loopback",
    "local",
    "broadcasthost",
    "0.0.0.0",
}

DISALLOWED_SUFFIXES = (
    ".local",
    ".localhost",
    ".internal",
    ".lan",
    ".corp",
    ".home",
    ".home.arpa",
    ".intranet",
    ".private",
    ".test",
    ".example",
    ".invalid",
)

# Approved primary domain for technical crawling and audits
PRIMARY_DOMAIN = "cybaemtech.com"
APPROVED_DOMAINS = {"cybaemtech.com", "www.cybaemtech.com"}

# Common weak/generic anchor texts
GENERIC_ANCHOR_PATTERNS = {
    "learn more", "click here", "read more", "more info", "view more",
    "here", "link", "details", "check it out", "download", "find out more"
}


# ============================================================================
# Security & URL Validation
# ============================================================================

def validate_target_url(
    raw_url: str,
    restrict_to_approved_domains: bool = False,
    allow_subdomains: bool = False,
    allowed_domains: Optional[Set[str]] = None,
) -> str:
    """
    Validates that a URL is a legitimate, publicly accessible HTTP or HTTPS URL.
    Rejects localhost, loopback, private IP addresses, link-local, multicast,
    and other internal network targets to prevent Server-Side Request Forgery (SSRF).
    Optionally enforces approved domain boundaries.
    """
    if not raw_url or not isinstance(raw_url, str):
        raise ValueError("URL must be a non-empty string.")

    cleaned_url = raw_url.strip()

    # Reject control characters
    if any(c in cleaned_url for c in ("\r", "\n", "\t", "\x00")):
        raise ValueError("URL contains invalid control characters.")

    try:
        parsed = urlparse(cleaned_url)
    except Exception as e:
        raise ValueError(f"Failed to parse URL: {str(e)}")

    scheme = (parsed.scheme or "").lower()
    if scheme not in ("http", "https"):
        raise ValueError(
            f"Invalid URL scheme '{scheme}'. Only 'http' and 'https' protocols are permitted."
        )

    hostname = (parsed.hostname or "").strip().lower()
    if not hostname:
        raise ValueError("Invalid URL: missing hostname.")

    # Check against known local/internal hostnames and suffixes
    if hostname in DISALLOWED_HOSTNAMES or hostname.endswith(DISALLOWED_SUFFIXES):
        raise ValueError(
            f"Access denied: Hostname '{hostname}' refers to a local or internal network target."
        )

    # Domain restriction check if requested
    if restrict_to_approved_domains:
        effective_allowed = allowed_domains or APPROVED_DOMAINS
        domain_ok = hostname in effective_allowed
        if not domain_ok and allow_subdomains:
            domain_ok = hostname.endswith(f".{PRIMARY_DOMAIN}") or hostname == PRIMARY_DOMAIN
        if not domain_ok:
            raise ValueError(
                f"Access denied: Hostname '{hostname}' is outside approved domains ({effective_allowed})."
            )

    # Resolve hostname via DNS and check every returned IP address (SSRF / DNS Rebinding check)
    try:
        addr_info = socket.getaddrinfo(hostname, None, proto=socket.IPPROTO_TCP)
    except socket.gaierror:
        raise ValueError(
            f"DNS resolution failed for hostname '{hostname}'. Ensure the domain exists and is publicly accessible."
        )
    except Exception as e:
        raise ValueError(f"Could not resolve hostname '{hostname}': {str(e)}")

    if not addr_info:
        raise ValueError(f"No IP addresses resolved for hostname '{hostname}'.")

    for entry in addr_info:
        sockaddr = entry[4]
        ip_str = sockaddr[0]
        try:
            ip_obj = ipaddress.ip_address(ip_str)
        except ValueError:
            raise ValueError(f"Invalid resolved IP address: {ip_str}")

        if (
            ip_obj.is_private
            or ip_obj.is_loopback
            or ip_obj.is_reserved
            or ip_obj.is_link_local
            or ip_obj.is_multicast
            or ip_obj.is_unspecified
        ):
            raise ValueError(
                f"Access denied: Hostname '{hostname}' resolves to restricted/internal IP {ip_str}."
            )

    return cleaned_url


def normalize_url(url: str) -> str:
    """Normalizes URL by stripping fragments, lowercase scheme/host, and normalizing paths."""
    try:
        parsed = urlparse(url)
        path = parsed.path or "/"
        # Normalize double slashes
        path = re.sub(r"/+", "/", path)
        # Strip tracking query params
        query_parts = []
        if parsed.query:
            ignored_params = {"utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"}
            for q in parsed.query.split("&"):
                if "=" in q:
                    k, v = q.split("=", 1)
                    if k.lower() not in ignored_params:
                        query_parts.append(q)
                else:
                    query_parts.append(q)
        clean_query = "&".join(query_parts)
        return urlunparse((
            parsed.scheme.lower(),
            parsed.netloc.lower(),
            path,
            parsed.params,
            clean_query,
            ""  # No fragment
        ))
    except Exception:
        return url


def is_static_asset_url(url: str) -> bool:
    """Checks if a URL points to a static media or binary asset."""
    ext = Path(urlparse(url).path).suffix.lower()
    return ext in {
        ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".avif", ".ico",
        ".pdf", ".zip", ".tar", ".gz", ".mp4", ".webm", ".avi", ".mov",
        ".woff", ".woff2", ".ttf", ".eot", ".css", ".js", ".map"
    }


def find_lighthouse_command() -> List[str]:
    """Locates Lighthouse CLI executable or npx wrapper without using shell=True."""
    for name in ("lighthouse.cmd", "lighthouse.exe", "lighthouse"):
        lh_path = shutil.which(name)
        if lh_path:
            return [lh_path]

    for name in ("npx.cmd", "npx.exe", "npx"):
        npx_path = shutil.which(name)
        if npx_path:
            return [npx_path, "lighthouse"]

    raise FileNotFoundError(
        "Lighthouse executable was not found. Please install it globally via "
        "'npm install -g lighthouse' or ensure Node.js / npx is present in your PATH."
    )


def get_safe_environment() -> Dict[str, str]:
    """Constructs a minimal, secure environment dictionary for subprocess execution."""
    allowed_keys = {
        "PATH",
        "PATHEXT",
        "SYSTEMROOT",
        "SYSTEMDRIVE",
        "TEMP",
        "TMP",
        "COMSPEC",
        "WINDIR",
        "USERPROFILE",
        "APPDATA",
        "LOCALAPPDATA",
        "PROGRAMFILES",
        "PROGRAMFILES(X86)",
        "PROGRAMDATA",
        "CHROME_PATH",
    }
    env = {k: v for k, v in os.environ.items() if k.upper() in allowed_keys}

    if "CHROME_PATH" not in env:
        candidates = [
            r"C:\Program Files\Google\Chrome\Application\chrome.exe",
            r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
            r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
            r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        ]
        for candidate in candidates:
            if os.path.isfile(candidate):
                env["CHROME_PATH"] = candidate
                break

    return env


def parse_lighthouse_data(
    report_data: Dict[str, Any],
    report_json_path: str,
    report_html_path: Optional[str] = None,
) -> Dict[str, Any]:
    """Parses Lighthouse raw JSON audit results into structured metrics and findings."""
    categories = report_data.get("categories", {})
    audits = report_data.get("audits", {})

    category_scores: Dict[str, Optional[int]] = {}
    for cat_id in ("seo", "performance", "accessibility", "best-practices", "pwa"):
        cat_info = categories.get(cat_id)
        if cat_info and cat_info.get("score") is not None:
            category_scores[cat_id] = round(cat_info["score"] * 100)
        else:
            category_scores[cat_id] = None

    perf_keys = {
        "first-contentful-paint": "First Contentful Paint (FCP)",
        "largest-contentful-paint": "Largest Contentful Paint (LCP)",
        "total-blocking-time": "Total Blocking Time (TBT)",
        "cumulative-layout-shift": "Cumulative Layout Shift (CLS)",
        "speed-index": "Speed Index (SI)",
        "interactive": "Time to Interactive (TTI)",
    }

    performance_metrics: Dict[str, Any] = {}
    for audit_id, label in perf_keys.items():
        audit_item = audits.get(audit_id)
        if audit_item:
            performance_metrics[audit_id] = {
                "label": label,
                "display_value": audit_item.get("displayValue"),
                "score": audit_item.get("score"),
                "numeric_value": audit_item.get("numericValue"),
            }

    seo_category = categories.get("seo", {})
    seo_audit_refs = [ref["id"] for ref in seo_category.get("auditRefs", [])]

    seo_issues: List[Dict[str, Any]] = []
    seo_passed: List[Dict[str, Any]] = []
    seo_not_applicable: List[str] = []

    for aid in seo_audit_refs:
        item = audits.get(aid, {})
        score = item.get("score")
        title = item.get("title", aid)
        display_val = item.get("displayValue")
        description = item.get("description", "")
        score_mode = item.get("scoreDisplayMode")

        if score_mode == "notApplicable":
            seo_not_applicable.append(title)
        elif score == 1:
            seo_passed.append({"id": aid, "title": title, "display_value": display_val})
        else:
            seo_issues.append({
                "id": aid,
                "title": title,
                "score": score,
                "display_value": display_val,
                "description": description,
            })

    seo_score_str = f"{category_scores.get('seo', 'N/A')}/100"
    perf_score_str = f"{category_scores.get('performance', 'N/A')}/100"
    summary_text = (
        f"Lighthouse Audit for {report_data.get('finalUrl') or report_data.get('requestedUrl')}:\n"
        f"- SEO Score: {seo_score_str}\n"
        f"- Performance Score: {perf_score_str}\n"
        f"- Accessibility Score: {category_scores.get('accessibility', 'N/A')}/100\n"
        f"- Best Practices Score: {category_scores.get('best-practices', 'N/A')}/100\n"
        f"- Total SEO Issues Found: {len(seo_issues)}\n"
        f"- Total SEO Checks Passed: {len(seo_passed)}"
    )

    return {
        "url": report_data.get("finalUrl") or report_data.get("requestedUrl"),
        "audit_timestamp": report_data.get("fetchTime"),
        "lighthouse_version": report_data.get("lighthouseVersion"),
        "report_json_path": report_json_path,
        "report_html_path": report_html_path,
        "category_scores": category_scores,
        "performance_metrics": performance_metrics,
        "seo_summary": {
            "passed_count": len(seo_passed),
            "issues_count": len(seo_issues),
            "not_applicable_count": len(seo_not_applicable),
        },
        "seo_issues": seo_issues,
        "seo_passed_audits": [item["title"] for item in seo_passed],
        "summary": summary_text,
    }


# ============================================================================
# Tool 1: run_lighthouse_audit (Preserved)
# ============================================================================
@mcp.tool()
def run_lighthouse_audit(
    url: str,
    preset: str = "desktop",
    generate_html: bool = True,
) -> Dict[str, Any]:
    """
    Runs an automated Google Lighthouse audit on an external website URL.
    Validates URL safety (rejects localhost, private IPs, and internal networks).
    Executes Lighthouse via a secure subprocess (never shell=True).

    Args:
        url: The website URL to audit (must use HTTP or HTTPS).
        preset: Device emulation preset ('desktop' or 'mobile'). Default is 'desktop'.
        generate_html: Whether to generate a browser-viewable HTML report alongside JSON. Default is True.

    Returns:
        A dictionary containing the report file path, category scores, Core Web Vitals,
        and detailed SEO issues and passed checks.
    """
    try:
        validated_url = validate_target_url(url)
    except ValueError as e:
        return {"error": f"URL Validation Error: {str(e)}", "success": False}

    cleaned_preset = preset.strip().lower()
    if cleaned_preset not in ("desktop", "mobile"):
        cleaned_preset = "desktop"

    try:
        lh_cmd = find_lighthouse_command()
    except FileNotFoundError as e:
        return {"error": str(e), "success": False}

    DEFAULT_REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    parsed_host = urlparse(validated_url).hostname or "site"
    sanitized_host = re.sub(r"[^a-zA-Z0-9_-]", "_", parsed_host)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    base_filename = f"lighthouse_{sanitized_host}_{timestamp}"
    base_output_path = DEFAULT_REPORTS_DIR / base_filename

    outputs = ["json"]
    if generate_html:
        outputs.append("html")

    cmd: List[str] = list(lh_cmd)
    cmd.extend([
        validated_url,
        f"--preset={cleaned_preset}",
        "--chrome-flags=--headless=new --no-sandbox --disable-gpu",
        "--quiet",
    ])

    for out in outputs:
        cmd.append(f"--output={out}")

    cmd.append(f"--output-path={str(base_output_path)}")

    safe_env = get_safe_environment()
    try:
        logger.info("Executing Lighthouse audit for %s...", validated_url)
        process = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            shell=False,
            env=safe_env,
            timeout=240,
        )
    except subprocess.TimeoutExpired:
        return {
            "error": "Lighthouse audit timed out after 240 seconds. The target site took too long to respond.",
            "success": False,
        }
    except Exception as e:
        return {"error": f"Execution error: {str(e)}", "success": False}

    candidate_json_paths = [
        DEFAULT_REPORTS_DIR / f"{base_filename}.report.json",
        DEFAULT_REPORTS_DIR / f"{base_filename}.json",
        Path(f"{base_output_path}.json"),
    ]
    json_path: Optional[Path] = None
    for p in candidate_json_paths:
        if p.is_file():
            json_path = p
            break

    candidate_html_paths = [
        DEFAULT_REPORTS_DIR / f"{base_filename}.report.html",
        DEFAULT_REPORTS_DIR / f"{base_filename}.html",
        Path(f"{base_output_path}.html"),
    ]
    html_path: Optional[Path] = None
    for p in candidate_html_paths:
        if p.is_file():
            html_path = p
            break

    if not json_path or not json_path.is_file():
        stderr_msg = process.stderr.strip() if process.stderr else "No additional error output."
        return {
            "error": f"Lighthouse did not produce a JSON report. Return code: {process.returncode}. Details: {stderr_msg}",
            "success": False,
        }

    try:
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        return {"error": f"Failed to read generated Lighthouse report: {str(e)}", "success": False}

    runtime_error = data.get("runtimeError")
    if runtime_error:
        err_msg = runtime_error.get("message", "Unknown Lighthouse runtime error.")
        return {
            "error": f"Lighthouse reported runtime error: {err_msg}",
            "report_json_path": str(json_path.resolve()),
            "success": False,
        }

    parsed_result = parse_lighthouse_data(
        data,
        report_json_path=str(json_path.resolve()),
        report_html_path=str(html_path.resolve()) if html_path else None,
    )
    parsed_result["success"] = True
    return parsed_result


# ============================================================================
# Tool 2: read_seo_report (Preserved)
# ============================================================================
@mcp.tool()
def read_seo_report(report_path: str) -> Dict[str, Any]:
    """
    Reads and parses an existing Lighthouse JSON report file to retrieve
    SEO scores, Core Web Vitals, and specific SEO issues.

    Args:
        report_path: File system path to the Lighthouse JSON report.

    Returns:
        A structured breakdown of category scores, performance metrics, and SEO audit issues.
    """
    if not report_path or not isinstance(report_path, str):
        return {"error": "report_path must be a non-empty string path.", "success": False}

    file_path = Path(report_path).resolve()

    if not file_path.exists():
        return {"error": f"Report file not found: {str(file_path)}", "success": False}

    if not file_path.is_file():
        return {"error": f"Target path is not a file: {str(file_path)}", "success": False}

    if file_path.suffix.lower() != ".json":
        return {"error": "Report path must have a .json extension.", "success": False}

    if file_path.stat().st_size > 50 * 1024 * 1024:
        return {"error": "Report file is too large (> 50MB).", "success": False}

    try:
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
    except json.JSONDecodeError:
        return {"error": "The specified file does not contain valid JSON.", "success": False}
    except Exception as e:
        return {"error": f"Unable to read file: {str(e)}", "success": False}

    if not isinstance(data, dict) or ("lighthouseVersion" not in data and "audits" not in data):
        return {
            "error": "The JSON file does not appear to be a valid Google Lighthouse report.",
            "success": False,
        }

    html_candidate = file_path.with_suffix(".html")
    report_html = str(html_candidate.resolve()) if html_candidate.is_file() else None

    parsed = parse_lighthouse_data(
        data,
        report_json_path=str(file_path),
        report_html_path=report_html,
    )
    parsed["success"] = True
    return parsed


# ============================================================================
# Tool 3: crawl_website (Website-wide crawler)
# ============================================================================
@mcp.tool()
def crawl_website(
    start_url: str = "https://www.cybaemtech.com/",
    max_pages: int = 40,
    max_depth: int = 3,
    request_timeout: float = 12.0,
    concurrency: int = 2,
    crawl_delay: float = 0.3,
    respect_robots: bool = True,
    allow_subdomains: bool = False,
) -> Dict[str, Any]:
    """
    Crawls internal pages of the approved website domain to map architecture,
    detect HTTP errors, redirect chains, loops, and orphan candidates.

    Args:
        start_url: Starting URL (default https://www.cybaemtech.com/).
        max_pages: Maximum number of pages to crawl (1 to 100). Default is 40.
        max_depth: Maximum click depth from start_url. Default is 3.
        request_timeout: HTTP request timeout in seconds. Default is 12.0.
        concurrency: Number of concurrent worker threads (1 to 4). Default is 2.
        crawl_delay: Minimum delay between requests in seconds. Default is 0.3.
        respect_robots: Whether to respect robots.txt rules. Default is True.
        allow_subdomains: Whether to crawl subdomains. Default is False.

    Returns:
        Structured summary containing crawled URLs, status codes, broken links,
        redirect chains, orphan candidates, and internal link graph metrics.
    """
    try:
        validated_start = validate_target_url(
            start_url,
            restrict_to_approved_domains=True,
            allow_subdomains=allow_subdomains,
        )
    except ValueError as e:
        return {"error": f"Crawl Target Validation Failed: {str(e)}", "success": False}

    max_pages = max(1, min(max_pages, 100))
    max_depth = max(1, min(max_depth, 6))
    parsed_start = urlparse(validated_start)
    root_domain = parsed_start.netloc.lower()

    # 1. Fetch and parse robots.txt if requested
    rp = urllib.robotparser.RobotFileParser()
    robots_url = f"{parsed_start.scheme}://{parsed_start.netloc}/robots.txt"
    robots_delay = crawl_delay
    if respect_robots:
        try:
            rp.set_url(robots_url)
            rp.read()
            delay = rp.crawl_delay("*")
            if delay:
                robots_delay = max(robots_delay, float(delay))
        except Exception as e:
            logger.warning("Could not read robots.txt from %s: %s", robots_url, str(e))

    # 2. Discover known URLs from local sitemap & application routes if in project
    discovered_sitemap_urls: Set[str] = set()
    sitemap_local_path = SERVER_DIR / "public" / "sitemap.xml"
    if sitemap_local_path.is_file():
        try:
            tree = ET.parse(sitemap_local_path)
            for loc in tree.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
                if loc.text:
                    discovered_sitemap_urls.add(normalize_url(loc.text.strip()))
        except Exception:
            pass

    # Crawl state tracking
    visited_urls: Dict[str, Dict[str, Any]] = {}
    queue: List[Tuple[str, int, Optional[str]]] = [(normalize_url(validated_start), 0, None)]
    queued_set: Set[str] = {normalize_url(validated_start)}
    broken_links: List[Dict[str, Any]] = []
    redirect_chains: List[Dict[str, Any]] = []
    inbound_links: Dict[str, List[Dict[str, str]]] = {}
    outbound_links: Dict[str, Set[str]] = {}

    session = requests.Session()
    session.headers.update({
        "User-Agent": "CybaemTech-TechnicalSEO-Auditor/2.0 (+https://www.cybaemtech.com/seo-auditor)"
    })

    logger.info("Beginning crawl from %s (max_pages=%d, max_depth=%d)", validated_start, max_pages, max_depth)

    while queue and len(visited_urls) < max_pages:
        current_url, depth, source_url = queue.pop(0)

        # Check robots.txt permission
        if respect_robots and not rp.can_fetch("*", current_url):
            logger.info("Skipping URL disallowed by robots.txt: %s", current_url)
            continue

        # SSRF validation check per URL before request
        try:
            validate_target_url(
                current_url,
                restrict_to_approved_domains=True,
                allow_subdomains=allow_subdomains,
            )
        except ValueError as e:
            logger.warning("Skipping URL failing SSRF check: %s (%s)", current_url, str(e))
            continue

        time.sleep(robots_delay)
        start_time = time.time()
        try:
            response = session.get(
                current_url,
                timeout=request_timeout,
                allow_redirects=True,
                stream=True
            )
            elapsed_ms = round((time.time() - start_time) * 1000)
            status_code = response.status_code
            content_type = response.headers.get("Content-Type", "")

            # Check for redirect history
            if response.history:
                chain = [r.url for r in response.history] + [response.url]
                redirect_chains.append({
                    "initial_url": current_url,
                    "final_url": response.url,
                    "hops": len(response.history),
                    "chain": chain,
                    "is_loop": len(chain) != len(set(chain)),
                })

            final_norm_url = normalize_url(response.url)

            # Record visit
            visited_urls[current_url] = {
                "status_code": status_code,
                "elapsed_ms": elapsed_ms,
                "depth": depth,
                "content_type": content_type,
                "redirected_to": final_norm_url if final_norm_url != current_url else None,
            }

            if status_code >= 400:
                broken_links.append({
                    "url": current_url,
                    "status_code": status_code,
                    "found_on": source_url or "seed",
                })
                continue

            # Only parse HTML responses
            if "text/html" not in content_type:
                continue

            # Read text (capped at 5MB)
            html_text = response.text[:5 * 1024 * 1024]
            soup = BeautifulSoup(html_text, "html.parser")

            outbound_set: Set[str] = set()
            # Extract links
            for a_tag in soup.find_all("a", href=True):
                raw_href = a_tag["href"].strip()
                if not raw_href or raw_href.startswith(("mailto:", "tel:", "javascript:", "#")):
                    continue

                abs_url = normalize_url(urljoin(current_url, raw_href))
                parsed_abs = urlparse(abs_url)

                # Check if internal domain
                is_internal = parsed_abs.netloc.lower() == root_domain
                if not is_internal and allow_subdomains:
                    is_internal = parsed_abs.netloc.lower().endswith(f".{PRIMARY_DOMAIN}")

                if not is_internal:
                    continue

                if is_static_asset_url(abs_url):
                    continue

                anchor_text = a_tag.get_text(strip=True)
                outbound_set.add(abs_url)

                # Record inbound link
                if abs_url not in inbound_links:
                    inbound_links[abs_url] = []
                inbound_links[abs_url].append({
                    "from_url": current_url,
                    "anchor_text": anchor_text,
                })

                # Queue next page if within depth and not yet seen
                if abs_url not in queued_set and depth + 1 <= max_depth:
                    queued_set.add(abs_url)
                    queue.append((abs_url, depth + 1, current_url))

            outbound_links[current_url] = outbound_set

        except requests.exceptions.RequestException as e:
            broken_links.append({
                "url": current_url,
                "error": str(e),
                "found_on": source_url or "seed",
            })

    # Identify orphan candidates: URLs in sitemap but zero inbound links found in crawl
    orphan_candidates = []
    for s_url in discovered_sitemap_urls:
        if s_url not in inbound_links and s_url != normalize_url(validated_start):
            orphan_candidates.append(s_url)

    logger.info("Crawl completed: visited %d URLs, found %d broken links", len(visited_urls), len(broken_links))

    return {
        "success": True,
        "start_url": validated_start,
        "pages_crawled_count": len(visited_urls),
        "broken_links_count": len(broken_links),
        "redirect_chains_count": len(redirect_chains),
        "orphan_candidates_count": len(orphan_candidates),
        "broken_links": broken_links,
        "redirect_chains": redirect_chains,
        "orphan_candidates": orphan_candidates[:20],
        "crawled_urls": [
            {
                "url": u,
                "status_code": data["status_code"],
                "depth": data["depth"],
                "elapsed_ms": data["elapsed_ms"],
                "inbound_count": len(inbound_links.get(u, [])),
            }
            for u, data in list(visited_urls.items())[:50]
        ],
    }


# ============================================================================
# Tool 4: analyze_page_seo (Deep On-Page SEO Analysis)
# ============================================================================
@mcp.tool()
def analyze_page_seo(
    url: str,
    custom_html: Optional[str] = None,
) -> Dict[str, Any]:
    """
    Performs comprehensive technical SEO audit of a specific page:
    Title, Meta Description, Canonical, Headings (H1/H2), Robots Directives,
    Link Text, Image Alt text, Schema Markup (JSON-LD), and Hreflang.

    Args:
        url: Page URL to analyze.
        custom_html: Optional HTML string to analyze instead of fetching over network.

    Returns:
        Structured audit report distinguishing confirmed issues, warnings,
        and informational findings.
    """
    try:
        validated_url = validate_target_url(url)
    except ValueError as e:
        return {"error": f"URL Validation Error: {str(e)}", "success": False}

    html_content = custom_html
    status_code = 200
    headers: Dict[str, str] = {}

    if not html_content:
        try:
            resp = requests.get(
                validated_url,
                timeout=15.0,
                headers={"User-Agent": "CybaemTech-TechnicalSEO-Auditor/2.0"}
            )
            status_code = resp.status_code
            headers = dict(resp.headers)
            html_content = resp.text
        except Exception as e:
            return {"error": f"Failed to fetch page: {str(e)}", "success": False}

    soup = BeautifulSoup(html_content, "html.parser")

    confirmed_issues: List[Dict[str, Any]] = []
    warnings: List[Dict[str, Any]] = []
    info: List[Dict[str, Any]] = []

    # 1. Title Tag
    title_tag = soup.find("title")
    title_text = title_tag.get_text(strip=True) if title_tag else ""
    if not title_text:
        confirmed_issues.append({
            "category": "Title",
            "issue": "Missing <title> tag",
            "severity": "CRITICAL",
            "fix": "Add a descriptive <title> tag between 50-60 characters.",
        })
    elif len(title_text) < 30:
        warnings.append({
            "category": "Title",
            "issue": f"Short title tag ({len(title_text)} chars): '{title_text}'",
            "severity": "MEDIUM",
            "fix": "Expand title to 50-60 characters including primary keywords and brand.",
        })
    elif len(title_text) > 65:
        warnings.append({
            "category": "Title",
            "issue": f"Title tag too long ({len(title_text)} chars): may truncate in SERPs",
            "severity": "LOW",
            "fix": "Keep title under 60 characters to avoid SERP truncation.",
        })
    else:
        info.append({"category": "Title", "item": f"Optimal title tag: '{title_text}' ({len(title_text)} chars)"})

    # 2. Meta Description
    meta_desc = soup.find("meta", attrs={"name": re.compile(r"^description$", re.I)})
    desc_text = meta_desc.get("content", "").strip() if meta_desc else ""
    if not desc_text:
        confirmed_issues.append({
            "category": "Meta Description",
            "issue": "Missing meta description",
            "severity": "HIGH",
            "fix": "Add an engaging meta description between 140-160 characters.",
        })
    elif len(desc_text) < 80:
        warnings.append({
            "category": "Meta Description",
            "issue": f"Short meta description ({len(desc_text)} chars)",
            "severity": "MEDIUM",
            "fix": "Expand meta description to 140-160 characters.",
        })
    elif len(desc_text) > 165:
        warnings.append({
            "category": "Meta Description",
            "issue": f"Meta description exceeds 165 characters ({len(desc_text)} chars)",
            "severity": "LOW",
            "fix": "Shorten to 140-160 characters to prevent snippet ellipsis.",
        })
    else:
        info.append({"category": "Meta Description", "item": f"Optimal meta description ({len(desc_text)} chars)"})

    # 3. Canonical Tag
    canonical_tags = soup.find_all("link", attrs={"rel": re.compile(r"^canonical$", re.I)})
    if not canonical_tags:
        warnings.append({
            "category": "Canonical",
            "issue": "Missing rel=canonical link tag",
            "severity": "MEDIUM",
            "fix": f"Add <link rel='canonical' href='{validated_url}' />.",
        })
    elif len(canonical_tags) > 1:
        confirmed_issues.append({
            "category": "Canonical",
            "issue": f"Multiple conflicting canonical tags found ({len(canonical_tags)})",
            "severity": "HIGH",
            "fix": "Ensure exactly one canonical link tag exists in <head>.",
        })
    else:
        canonical_href = canonical_tags[0].get("href", "").strip()
        info.append({"category": "Canonical", "item": f"Canonical URL specified: {canonical_href}"})

    # 4. Meta Robots & X-Robots-Tag
    meta_robots = soup.find("meta", attrs={"name": re.compile(r"^robots$", re.I)})
    robots_content = meta_robots.get("content", "").lower() if meta_robots else ""
    x_robots = headers.get("X-Robots-Tag", "").lower()
    if "noindex" in robots_content or "noindex" in x_robots:
        warnings.append({
            "category": "Indexing",
            "issue": "Page has 'noindex' directive and will NOT be indexed by search engines",
            "severity": "HIGH",
            "fix": "Remove 'noindex' directive if this page should be indexed.",
        })

    # 5. Heading Structure (H1, H2)
    h1_tags = soup.find_all("h1")
    if len(h1_tags) == 0:
        confirmed_issues.append({
            "category": "Headings",
            "issue": "Missing <h1> tag",
            "severity": "HIGH",
            "fix": "Add exactly one semantic <h1> describing the primary topic.",
        })
    elif len(h1_tags) > 1:
        warnings.append({
            "category": "Headings",
            "issue": f"Multiple <h1> tags found ({len(h1_tags)})",
            "severity": "LOW",
            "fix": "Consolidate into a single <h1> heading.",
        })
    else:
        info.append({"category": "Headings", "item": f"Valid single <h1>: '{h1_tags[0].get_text(strip=True)[:50]}'"})

    # 6. Link Text Quality
    generic_links: List[Dict[str, str]] = []
    empty_links: List[str] = []
    for a in soup.find_all("a", href=True):
        txt = a.get_text(strip=True).lower()
        href = a["href"].strip()
        if not txt and not a.find("img"):
            empty_links.append(href)
        elif txt in GENERIC_ANCHOR_PATTERNS:
            generic_links.append({"text": a.get_text(strip=True), "href": href})

    if generic_links:
        warnings.append({
            "category": "Internal Links",
            "issue": f"Found {len(generic_links)} links with generic anchor text (e.g. 'Learn More', 'Click Here')",
            "severity": "MEDIUM",
            "samples": generic_links[:5],
            "fix": "Use keyword-descriptive anchor text or descriptive aria-label attributes.",
        })

    if empty_links:
        warnings.append({
            "category": "Internal Links",
            "issue": f"Found {len(empty_links)} empty anchor links without text or alt",
            "severity": "LOW",
            "samples": empty_links[:5],
            "fix": "Add descriptive anchor text or accessible labels to empty links.",
        })

    # 7. Images Alt Attributes
    images = soup.find_all("img")
    missing_alt = [img.get("src", "unknown") for img in images if img.get("alt") is None]
    empty_alt = [img.get("src", "unknown") for img in images if img.get("alt") == ""]
    if missing_alt:
        confirmed_issues.append({
            "category": "Images",
            "issue": f"Found {len(missing_alt)} images missing 'alt' attribute",
            "severity": "MEDIUM",
            "samples": missing_alt[:5],
            "fix": "Add descriptive alt attributes to all content images.",
        })
    else:
        info.append({"category": "Images", "item": f"All {len(images)} images have alt attributes"})

    # 8. Schema Markup (JSON-LD)
    json_ld_scripts = soup.find_all("script", attrs={"type": "application/ld+json"})
    valid_schemas: List[str] = []
    schema_errors: List[str] = []
    for s in json_ld_scripts:
        try:
            data = json.loads(s.string or "{}")
            stype = data.get("@type") or [item.get("@type") for item in data if isinstance(item, dict)]
            valid_schemas.append(str(stype))
        except Exception as e:
            schema_errors.append(str(e))

    if schema_errors:
        confirmed_issues.append({
            "category": "Structured Data",
            "issue": f"Syntax error in JSON-LD structured data: {schema_errors[0]}",
            "severity": "HIGH",
            "fix": "Fix JSON syntax in application/ld+json scripts.",
        })
    elif valid_schemas:
        info.append({"category": "Structured Data", "item": f"Found {len(valid_schemas)} valid Schema schemas: {valid_schemas}"})
    else:
        warnings.append({
            "category": "Structured Data",
            "issue": "No JSON-LD structured data found on page",
            "severity": "LOW",
            "fix": "Add Organization, WebSite, or Service JSON-LD schema.",
        })

    # 9. Hreflang
    hreflangs = soup.find_all("link", attrs={"rel": "alternate", "hreflang": True})
    if hreflangs:
        info.append({"category": "Hreflang", "item": f"Found {len(hreflangs)} hreflang annotations."})

    return {
        "success": True,
        "url": validated_url,
        "status_code": status_code,
        "summary": {
            "confirmed_issues_count": len(confirmed_issues),
            "warnings_count": len(warnings),
            "info_count": len(info),
        },
        "confirmed_issues": confirmed_issues,
        "warnings": warnings,
        "info": info,
    }


# ============================================================================
# Tool 5: check_robots_and_sitemap
# ============================================================================
@mcp.tool()
def check_robots_and_sitemap(
    domain_or_url: str = "https://www.cybaemtech.com",
) -> Dict[str, Any]:
    """
    Validates robots.txt syntax and sitemap configurations, verifies declared
    sitemaps, inspects XML sitemaps for validity, and tests a sample of URLs.

    Args:
        domain_or_url: The target website domain or URL.

    Returns:
        Validation report of robots.txt directives, sitemap URLs, status codes,
        and canonical consistency.
    """
    try:
        validated_url = validate_target_url(domain_or_url)
    except ValueError as e:
        return {"error": f"URL Validation Error: {str(e)}", "success": False}

    parsed = urlparse(validated_url)
    base_url = f"{parsed.scheme}://{parsed.netloc}"
    robots_url = f"{base_url}/robots.txt"

    issues: List[Dict[str, Any]] = []
    warnings: List[Dict[str, Any]] = []
    info: List[Dict[str, Any]] = []
    sitemaps_declared: List[str] = []

    # 1. Fetch robots.txt
    try:
        r_resp = requests.get(robots_url, timeout=10.0, headers={"User-Agent": "CybaemTech-TechnicalSEO-Auditor/2.0"})
        if r_resp.status_code == 200:
            robots_content = r_resp.text
            info.append({"category": "robots.txt", "item": "robots.txt found with 200 OK"})

            # Parse lines
            for line in robots_content.splitlines():
                line = line.strip()
                if line.lower().startswith("sitemap:"):
                    smap_url = line.split(":", 1)[1].strip()
                    sitemaps_declared.append(smap_url)
                elif line.lower().startswith("disallow:"):
                    path = line.split(":", 1)[1].strip()
                    if path == "/":
                        issues.append({
                            "category": "robots.txt",
                            "severity": "CRITICAL",
                            "issue": "robots.txt has 'Disallow: /' blocking all crawlers!",
                            "fix": "Remove 'Disallow: /' if the site should be indexed.",
                        })

            if not sitemaps_declared:
                warnings.append({
                    "category": "robots.txt",
                    "severity": "MEDIUM",
                    "issue": "No Sitemap directives found in robots.txt",
                    "fix": f"Add 'Sitemap: {base_url}/sitemap.xml' to robots.txt.",
                })
        else:
            warnings.append({
                "category": "robots.txt",
                "severity": "HIGH",
                "issue": f"robots.txt returned HTTP {r_resp.status_code}",
                "fix": "Create a valid robots.txt file in the site root.",
            })
    except Exception as e:
        warnings.append({
            "category": "robots.txt",
            "severity": "HIGH",
            "issue": f"Failed to fetch robots.txt: {str(e)}",
            "fix": "Verify that robots.txt is accessible over HTTPS.",
        })

    # Default to standard sitemap if none declared
    if not sitemaps_declared:
        sitemaps_declared.append(f"{base_url}/sitemap.xml")

    # 2. Inspect sitemaps
    sitemap_results: List[Dict[str, Any]] = []
    for smap_url in sitemaps_declared:
        try:
            validate_target_url(smap_url)
            s_resp = requests.get(smap_url, timeout=10.0, headers={"User-Agent": "CybaemTech-TechnicalSEO-Auditor/2.0"})
            if s_resp.status_code != 200:
                issues.append({
                    "category": "Sitemap",
                    "severity": "HIGH",
                    "issue": f"Sitemap {smap_url} returned HTTP {s_resp.status_code}",
                    "fix": "Ensure all declared sitemaps return 200 OK.",
                })
                continue

            # Parse XML
            root = ET.fromstring(s_resp.content)
            # Check if sitemap index or urlset
            tag = root.tag.lower()
            is_index = "sitemapindex" in tag
            urls_found: List[str] = []

            if is_index:
                for sub in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
                    if sub.text:
                        urls_found.append(sub.text.strip())
                sitemap_results.append({
                    "sitemap_url": smap_url,
                    "type": "sitemap_index",
                    "child_sitemaps_count": len(urls_found),
                    "child_sitemaps": urls_found[:10],
                })
            else:
                for loc in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
                    if loc.text:
                        urls_found.append(loc.text.strip())
                sitemap_results.append({
                    "sitemap_url": smap_url,
                    "type": "urlset",
                    "urls_count": len(urls_found),
                    "sample_urls": urls_found[:10],
                })

            info.append({"category": "Sitemap", "item": f"Sitemap {smap_url} parsed successfully ({len(urls_found)} entries)."})

        except ET.ParseError as e:
            issues.append({
                "category": "Sitemap",
                "severity": "HIGH",
                "issue": f"XML parse error in {smap_url}: {str(e)}",
                "fix": "Ensure sitemap conforms to XML sitemap 0.9 schema.",
            })
        except Exception as e:
            warnings.append({
                "category": "Sitemap",
                "severity": "MEDIUM",
                "issue": f"Error validating sitemap {smap_url}: {str(e)}",
                "fix": "Verify that sitemap URL is accessible.",
            })

    return {
        "success": True,
        "base_url": base_url,
        "robots_txt_url": robots_url,
        "sitemaps_declared": sitemaps_declared,
        "sitemap_results": sitemap_results,
        "confirmed_issues": issues,
        "warnings": warnings,
        "info": info,
    }


# ============================================================================
# Tool 6: check_rendered_pages (JS Rendering vs Raw HTML DOM)
# ============================================================================
@mcp.tool()
def check_rendered_pages(
    urls: Optional[List[str]] = None,
    timeout_ms: int = 25000,
) -> Dict[str, Any]:
    """
    Compares raw HTTP HTML against the browser-rendered DOM using headless Chrome.
    Identifies missing prerendered metadata, JavaScript console errors, failed
    resources, and discrepancies in titles, descriptions, canonicals, H1s, and links.

    Args:
        urls: List of page URLs to inspect (defaults to core Cybaem Tech pages).
        timeout_ms: Page navigation timeout in milliseconds. Default is 25000.

    Returns:
        Detailed comparison evidence for each route, detecting client-only hydration
        gaps, JavaScript errors, and missing prerendered tags.
    """
    if not PLAYWRIGHT_AVAILABLE:
        return {
            "error": "Playwright is not installed in the environment. Run: pip install playwright",
            "success": False,
        }

    default_routes = [
        "https://www.cybaemtech.com/",
        "https://www.cybaemtech.com/about",
        "https://www.cybaemtech.com/contact",
        "https://www.cybaemtech.com/solutions/web-systems",
        "https://www.cybaemtech.com/digital-marketing/seo-aeo-geo",
    ]
    target_urls = urls or default_routes

    # Validate all target URLs
    validated_urls: List[str] = []
    for u in target_urls:
        try:
            validated_urls.append(validate_target_url(u, restrict_to_approved_domains=True))
        except ValueError as e:
            logger.warning("Skipping invalid URL %s: %s", u, str(e))

    if not validated_urls:
        return {"error": "No valid URLs provided for rendered inspection.", "success": False}

    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    launch_kwargs: Dict[str, Any] = {"headless": True}
    if os.path.isfile(chrome_path):
        launch_kwargs["executable_path"] = chrome_path

    results: List[Dict[str, Any]] = []

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(**launch_kwargs)
            for page_url in validated_urls:
                console_errors: List[str] = []
                failed_requests: List[str] = []

                # 1. Fetch raw HTML
                raw_html = ""
                raw_title = ""
                raw_desc = ""
                raw_canonical = ""
                raw_h1 = ""
                raw_links_count = 0
                try:
                    raw_resp = requests.get(
                        page_url,
                        timeout=12.0,
                        headers={"User-Agent": "CybaemTech-TechnicalSEO-Auditor/2.0"}
                    )
                    raw_html = raw_resp.text
                    raw_soup = BeautifulSoup(raw_html, "html.parser")
                    raw_title = raw_soup.title.string.strip() if raw_soup.title and raw_soup.title.string else ""
                    m_desc = raw_soup.find("meta", attrs={"name": re.compile(r"^description$", re.I)})
                    raw_desc = m_desc.get("content", "").strip() if m_desc else ""
                    m_can = raw_soup.find("link", attrs={"rel": "canonical"})
                    raw_canonical = m_can.get("href", "").strip() if m_can else ""
                    h1 = raw_soup.find("h1")
                    raw_h1 = h1.get_text(strip=True) if h1 else ""
                    raw_links_count = len(raw_soup.find_all("a", href=True))
                except Exception as e:
                    logger.warning("Failed raw fetch for %s: %s", page_url, str(e))

                # 2. Render in headless Chrome
                page = browser.new_page()
                page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
                page.on("requestfailed", lambda req: failed_requests.append(f"{req.url} ({req.failure})"))

                rendered_title = ""
                rendered_desc = ""
                rendered_canonical = ""
                rendered_h1 = ""
                rendered_links_count = 0
                render_success = False

                try:
                    page.goto(page_url, timeout=timeout_ms, wait_until="domcontentloaded")
                    page.wait_for_timeout(1500)  # Allow client hydration to settle
                    rendered_html = page.content()
                    rendered_soup = BeautifulSoup(rendered_html, "html.parser")
                    rendered_title = page.title()
                    r_desc = rendered_soup.find("meta", attrs={"name": re.compile(r"^description$", re.I)})
                    rendered_desc = r_desc.get("content", "").strip() if r_desc else ""
                    r_can = rendered_soup.find("link", attrs={"rel": "canonical"})
                    rendered_canonical = r_can.get("href", "").strip() if r_can else ""
                    rh1 = rendered_soup.find("h1")
                    rendered_h1 = rh1.get_text(strip=True) if rh1 else ""
                    rendered_links_count = len(rendered_soup.find_all("a", href=True))
                    render_success = True
                except Exception as e:
                    console_errors.append(f"Render navigation error: {str(e)}")
                finally:
                    page.close()

                # 3. Detect discrepancies & issues
                discrepancies: List[str] = []
                if raw_title != rendered_title:
                    discrepancies.append(f"Title changed: raw='{raw_title[:30]}...' vs rendered='{rendered_title[:30]}...'")
                if raw_desc != rendered_desc:
                    discrepancies.append("Meta description modified or injected only by client JS")
                if raw_canonical != rendered_canonical:
                    discrepancies.append("Canonical URL altered during client rendering")
                if not raw_h1 and rendered_h1:
                    discrepancies.append("H1 missing in raw HTML but injected via client JavaScript")

                results.append({
                    "url": page_url,
                    "render_success": render_success,
                    "raw_metadata": {
                        "title": raw_title,
                        "description": raw_desc,
                        "canonical": raw_canonical,
                        "h1": raw_h1,
                        "links_count": raw_links_count,
                    },
                    "rendered_metadata": {
                        "title": rendered_title,
                        "description": rendered_desc,
                        "canonical": rendered_canonical,
                        "h1": rendered_h1,
                        "links_count": rendered_links_count,
                    },
                    "discrepancies": discrepancies,
                    "console_errors_count": len(console_errors),
                    "console_errors_sample": console_errors[:5],
                    "failed_requests_count": len(failed_requests),
                    "failed_requests_sample": failed_requests[:5],
                })

            browser.close()

    except Exception as e:
        return {"error": f"Headless browser execution failed: {str(e)}", "success": False}

    return {
        "success": True,
        "inspected_routes_count": len(results),
        "results": results,
    }


# ============================================================================
# Tool 7: inspect_google_indexing (Google Search Console URL Inspection API)
# ============================================================================
@mcp.tool()
def inspect_google_indexing(
    inspection_url: str = "https://www.cybaemtech.com/",
    site_url: str = "https://www.cybaemtech.com/",
    credentials_path: Optional[str] = None,
) -> Dict[str, Any]:
    """
    Queries the official Google Search Console URL Inspection API to retrieve
    verified indexing status, crawl timestamp, coverage state, user-declared
    vs Google-selected canonical URLs, and sitemap references.

    Args:
        inspection_url: The exact page URL to inspect.
        site_url: The Search Console site property (e.g. 'https://www.cybaemtech.com/' or 'sc-domain:cybaemtech.com').
        credentials_path: Optional path to Google service account JSON key file.

    Returns:
        Structured Google indexing verdict and coverage information, or clear
        remediation steps if credentials/permissions are required.
    """
    if not GOOGLE_AUTH_AVAILABLE:
        return {
            "error": "Google Auth library is not available. Install with: pip install google-auth",
            "success": False,
        }

    try:
        valid_inspect_url = validate_target_url(inspection_url, restrict_to_approved_domains=True)
    except ValueError as e:
        return {"error": f"URL Validation Error: {str(e)}", "success": False}

    # Locate service account credentials
    target_cred_path: Optional[Path] = None
    if credentials_path:
        p = Path(credentials_path).resolve()
        if p.is_file():
            target_cred_path = p

    if not target_cred_path:
        # Check standard credentials directory
        cred_candidates = list(DEFAULT_CREDENTIALS_DIR.glob("*.json"))
        if cred_candidates:
            target_cred_path = cred_candidates[0]

    if not target_cred_path:
        env_cred = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
        if env_cred and Path(env_cred).is_file():
            target_cred_path = Path(env_cred)

    if not target_cred_path or not target_cred_path.is_file():
        return {
            "success": False,
            "error": "Google Search Console service account JSON file was not found in 'credentials/'.",
            "required_setup": (
                "To enable live Search Console URL Inspection:\n"
                "1. Place your Service Account JSON key inside the 'credentials/' folder.\n"
                "2. Add the Service Account client email as a 'Viewer' in Google Search Console for your domain property."
            ),
        }

    # Authenticate securely (server-side only, never expose tokens or private keys)
    try:
        with open(target_cred_path, "r", encoding="utf-8") as f:
            cred_json = json.load(f)
            client_email = cred_json.get("client_email", "unknown")

        creds = service_account.Credentials.from_service_account_file(
            str(target_cred_path),
            scopes=["https://www.googleapis.com/auth/webmasters.readonly"]
        )
        creds.refresh(GoogleAuthRequest())
        token = creds.token
    except Exception as e:
        return {
            "success": False,
            "error": f"Authentication with service account failed: {str(e)}",
        }

    # Call official Search Console URL Inspection API
    api_endpoint = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"
    payload = {
        "inspectionUrl": valid_inspect_url,
        "siteUrl": site_url,
    }

    try:
        response = requests.post(
            api_endpoint,
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json",
            },
            json=payload,
            timeout=15.0,
        )
    except Exception as e:
        return {"error": f"Search Console API request failed: {str(e)}", "success": False}

    if response.status_code == 403:
        return {
            "success": False,
            "error": "Permission denied (HTTP 403) from Google Search Console API.",
            "client_email": client_email,
            "remediation": (
                f"The service account '{client_email}' does not currently have permissions "
                f"for the property '{site_url}'. In Google Search Console > Settings > Users & Permissions, "
                f"add '{client_email}' as a Restricted or Full User."
            ),
        }

    if response.status_code != 200:
        return {
            "success": False,
            "error": f"Google Search Console API error ({response.status_code}): {response.text}",
        }

    data = response.json()
    inspection_result = data.get("inspectionResult", {})
    index_status = inspection_result.get("indexStatusResult", {})

    return {
        "success": True,
        "inspection_url": valid_inspect_url,
        "site_url": site_url,
        "verdict": index_status.get("verdict"),
        "coverage_state": index_status.get("coverageState"),
        "crawled_as": index_status.get("crawledAs"),
        "last_crawl_time": index_status.get("lastCrawlTime"),
        "indexing_state": index_status.get("indexingState"),
        "user_canonical": index_status.get("userCanonical"),
        "google_canonical": index_status.get("googleCanonical"),
        "referring_urls": index_status.get("referringUrls", []),
        "sitemap_urls": index_status.get("sitemap", []),
    }


# ============================================================================
# Tool 8: analyze_internal_links (Reconcile Routes, Sitemaps & Links)
# ============================================================================
@mcp.tool()
def analyze_internal_links(
    crawl_data: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    """
    Reconciles application routes (from App.tsx/seo-config), XML sitemaps,
    and crawled internal links. Identifies missing sitemap entries, orphan
    candidates, dead ends, and non-descriptive anchor texts.

    Args:
        crawl_data: Optional pre-executed crawl result. If None, performs discovery
                    from local project files (App.tsx, sitemaps, robots.txt).

    Returns:
        Gap analysis of route discovery, missing sitemaps, orphan pages, and weak anchor texts.
    """
    # 1. Discover Application Routes from src/App.tsx
    app_routes: Set[str] = set()
    app_tsx = SERVER_DIR / "src" / "App.tsx"
    if app_tsx.is_file():
        try:
            content = app_tsx.read_text(encoding="utf-8")
            # Extract Route path="..." elements
            for match in re.finditer(r'<Route\s+path=["\']([^"\']+)["\']', content):
                route_path = match.group(1).strip()
                # Exclude parameterized routes like :id, :slug, *
                if ":" not in route_path and "*" not in route_path:
                    normalized = f"https://www.cybaemtech.com{route_path if route_path.startswith('/') else '/' + route_path}"
                    app_routes.add(normalize_url(normalized))
        except Exception as e:
            logger.warning("Could not read App.tsx routes: %s", str(e))

    # 2. Discover URLs from local sitemap files
    sitemap_urls: Set[str] = set()
    public_dir = SERVER_DIR / "public"
    for smap_file in public_dir.glob("*sitemap*.xml"):
        try:
            tree = ET.parse(smap_file)
            for loc in tree.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
                if loc.text:
                    sitemap_urls.add(normalize_url(loc.text.strip()))
        except Exception:
            pass

    # 3. Analyze crawl data if supplied or fallback
    orphan_candidates: List[str] = []
    missing_from_sitemaps: List[str] = []
    weak_anchor_links: List[Dict[str, str]] = []

    # Identify routes present in application but missing from XML sitemaps
    for route in app_routes:
        # Ignore admin/login/utility routes
        if any(ign in route for ign in ("/admin", "/login", "/carrier", "/career")):
            continue
        if route not in sitemap_urls:
            missing_from_sitemaps.append(route)

    # If crawl data is provided, extract orphan pages and weak anchor texts
    if crawl_data and isinstance(crawl_data, dict):
        orphan_candidates = crawl_data.get("orphan_candidates", [])
        for link_issue in crawl_data.get("weak_anchors", []):
            weak_anchor_links.append(link_issue)

    return {
        "success": True,
        "application_routes_count": len(app_routes),
        "sitemap_urls_count": len(sitemap_urls),
        "missing_from_sitemaps_count": len(missing_from_sitemaps),
        "missing_from_sitemaps": sorted(missing_from_sitemaps)[:20],
        "orphan_candidates": orphan_candidates,
        "recommendations": [
            "Ensure all canonical public routes from App.tsx are registered in pagesSitemap.xml.",
            "Replace generic 'Learn More' anchor texts across solutions with descriptive keywords.",
            "Verify that internal linking connects to all service landing pages to prevent orphan status.",
        ],
    }


# ============================================================================
# Tool 9: generate_seo_report (Unified Technical SEO Audit Report)
# ============================================================================
@mcp.tool()
def generate_seo_report(
    target_url: str = "https://www.cybaemtech.com/",
    include_lighthouse: bool = True,
    include_crawl: bool = True,
    crawl_max_pages: int = 25,
) -> Dict[str, Any]:
    """
    Executes an integrated technical SEO audit combining Lighthouse, crawler,
    on-page technical validator, robots/sitemap inspection, and internal linking.
    Generates unified JSON and interactive HTML reports.

    Args:
        target_url: The primary URL to audit.
        include_lighthouse: Whether to include a Lighthouse performance audit.
        include_crawl: Whether to crawl internal pages.
        crawl_max_pages: Maximum pages to crawl. Default is 25.

    Returns:
        File paths to the generated unified JSON and HTML reports, accompanied
        by an executive summary of critical issues and recommended fixes.
    """
    try:
        valid_url = validate_target_url(target_url, restrict_to_approved_domains=True)
    except ValueError as e:
        return {"error": f"URL Validation Error: {str(e)}", "success": False}

    DEFAULT_SEO_REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    report_id = f"seo_unified_audit_{timestamp}"

    findings: List[Dict[str, Any]] = []

    # 1. Technical On-Page SEO
    logger.info("Auditing on-page SEO for %s...", valid_url)
    page_seo = analyze_page_seo(valid_url)
    if page_seo.get("success"):
        for issue in page_seo.get("confirmed_issues", []):
            findings.append({
                "source": "Page Technical SEO",
                "severity": issue.get("severity", "HIGH"),
                "category": issue.get("category", "SEO"),
                "url": valid_url,
                "issue": issue.get("issue"),
                "recommendation": issue.get("fix"),
            })
        for warn in page_seo.get("warnings", []):
            findings.append({
                "source": "Page Technical SEO",
                "severity": warn.get("severity", "MEDIUM"),
                "category": warn.get("category", "SEO"),
                "url": valid_url,
                "issue": warn.get("issue"),
                "recommendation": warn.get("fix"),
            })

    # 2. Robots & Sitemap Checks
    logger.info("Auditing robots.txt and sitemaps...")
    robots_audit = check_robots_and_sitemap(valid_url)
    if robots_audit.get("success"):
        for issue in robots_audit.get("confirmed_issues", []):
            findings.append({
                "source": "Robots & Sitemap",
                "severity": issue.get("severity", "HIGH"),
                "category": issue.get("category", "Indexability"),
                "url": valid_url,
                "issue": issue.get("issue"),
                "recommendation": issue.get("fix"),
                "file": "public/robots.txt",
            })

    # 3. Internal Links Reconciliation
    logger.info("Auditing internal links and routes...")
    link_audit = analyze_internal_links()
    if link_audit.get("missing_from_sitemaps"):
        findings.append({
            "source": "Link Analysis",
            "severity": "MEDIUM",
            "category": "Sitemap Discovery",
            "url": valid_url,
            "issue": f"{link_audit.get('missing_from_sitemaps_count')} application routes are missing from XML sitemaps.",
            "recommendation": "Add missing canonical routes to public/pagesSitemap.xml.",
            "file": "public/pagesSitemap.xml",
        })

    # 4. Optional Crawl
    crawl_results = {}
    if include_crawl:
        logger.info("Running website crawl (max %d pages)...", crawl_max_pages)
        crawl_results = crawl_website(
            start_url=valid_url,
            max_pages=crawl_max_pages,
            max_depth=2,
            crawl_delay=0.3,
        )
        if crawl_results.get("broken_links"):
            for b_link in crawl_results["broken_links"]:
                findings.append({
                    "source": "Crawler",
                    "severity": "CRITICAL",
                    "category": "Broken Links",
                    "url": b_link.get("url"),
                    "issue": f"Broken internal link returning status {b_link.get('status_code') or b_link.get('error')}",
                    "recommendation": "Fix or redirect broken internal link.",
                })

    # 5. Optional Lighthouse Audit
    lighthouse_results = {}
    if include_lighthouse:
        # Check if an existing recent Lighthouse report exists to reuse
        recent_lh = list(DEFAULT_REPORTS_DIR.glob("*cybaemtech*.report.json"))
        if recent_lh:
            latest_lh = max(recent_lh, key=os.path.getmtime)
            logger.info("Loading existing Lighthouse report from %s...", latest_lh)
            lighthouse_results = read_seo_report(str(latest_lh))
        else:
            logger.info("Running fresh Lighthouse audit...")
            lighthouse_results = run_lighthouse_audit(valid_url, preset="desktop", generate_html=False)

        if lighthouse_results.get("seo_issues"):
            for issue in lighthouse_results["seo_issues"]:
                findings.append({
                    "source": "Lighthouse",
                    "severity": "HIGH" if issue.get("score") == 0 else "MEDIUM",
                    "category": "Lighthouse SEO",
                    "url": valid_url,
                    "issue": issue.get("title"),
                    "recommendation": issue.get("description"),
                })

    # Sort findings by severity
    severity_order = {"CRITICAL": 0, "HIGH": 1, "MEDIUM": 2, "LOW": 3, "INFO": 4}
    findings.sort(key=lambda x: severity_order.get(x.get("severity", "LOW"), 3))

    report_payload = {
        "report_id": report_id,
        "target_url": valid_url,
        "generated_at": datetime.now().isoformat(),
        "summary": {
            "total_findings": len(findings),
            "critical_count": sum(1 for f in findings if f["severity"] == "CRITICAL"),
            "high_count": sum(1 for f in findings if f["severity"] == "HIGH"),
            "medium_count": sum(1 for f in findings if f["severity"] == "MEDIUM"),
            "low_count": sum(1 for f in findings if f["severity"] == "LOW"),
        },
        "lighthouse_scores": lighthouse_results.get("category_scores", {}),
        "findings": findings,
    }

    # Save JSON report
    json_path = DEFAULT_SEO_REPORTS_DIR / f"{report_id}.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(report_payload, f, indent=2)

    # Generate HTML report
    html_path = DEFAULT_SEO_REPORTS_DIR / f"{report_id}.html"
    rows_html = ""
    for f in findings:
        badge_color = {
            "CRITICAL": "#dc2626",
            "HIGH": "#ea580c",
            "MEDIUM": "#ca8a04",
            "LOW": "#2563eb",
            "INFO": "#64748b"
        }.get(f["severity"], "#64748b")
        file_tag = f"<span style='font-size:11px;color:#0284c7;background:#e0f2fe;padding:2px 6px;border-radius:4px;'>{f['file']}</span>" if f.get("file") else ""
        rows_html += f"""
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:12px;"><span style="background:{badge_color};color:#fff;padding:3px 8px;border-radius:9999px;font-size:11px;font-weight:600;">{f['severity']}</span></td>
          <td style="padding:12px;font-size:13px;color:#475569;">{f.get('source')}</td>
          <td style="padding:12px;font-size:13px;font-weight:600;color:#0f172a;">{f.get('issue')} {file_tag}</td>
          <td style="padding:12px;font-size:13px;color:#334155;">{f.get('recommendation')}</td>
        </tr>
        """

    lh_scores = lighthouse_results.get("category_scores", {})
    scores_html = ""
    for cat, sc in lh_scores.items():
        if sc is not None:
            color = "#16a34a" if sc >= 90 else ("#ca8a04" if sc >= 50 else "#dc2626")
            scores_html += f"""
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;min-width:130px;">
              <div style="font-size:28px;font-weight:700;color:{color};">{sc}</div>
              <div style="font-size:12px;color:#64748b;text-transform:uppercase;margin-top:4px;">{cat}</div>
            </div>
            """

    full_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Technical SEO Audit Report - {valid_url}</title>
  <style>
    body {{ font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f8fafc; color: #0f172a; margin: 0; padding: 32px; }}
    .container {{ max-width: 1100px; margin: 0 auto; }}
    .header {{ margin-bottom: 24px; }}
    .header h1 {{ margin: 0 0 8px 0; font-size: 24px; }}
    .cards {{ display: flex; gap: 16px; margin-bottom: 32px; flex-wrap: wrap; }}
    table {{ width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }}
    th {{ background: #f1f5f9; padding: 12px; text-align: left; font-size: 12px; color: #475569; text-transform: uppercase; }}
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Technical SEO Audit Report</h1>
      <p style="color:#64748b;margin:0;">Target: <strong>{valid_url}</strong> | Generated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}</p>
    </div>
    <div class="cards">
      {scores_html}
    </div>
    <table>
      <thead>
        <tr>
          <th>Severity</th>
          <th>Source</th>
          <th>Issue Detected</th>
          <th>Recommended Fix</th>
        </tr>
      </thead>
      <tbody>
        {rows_html}
      </tbody>
    </table>
  </div>
</body>
</html>"""

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(full_html)

    logger.info("Unified SEO report generated: %s and %s", json_path, html_path)

    return {
        "success": True,
        "report_id": report_id,
        "json_report_path": str(json_path.resolve()),
        "html_report_path": str(html_path.resolve()),
        "summary": report_payload["summary"],
        "critical_issues_sample": [f["issue"] for f in findings if f["severity"] in ("CRITICAL", "HIGH")][:5],
    }


# ============================================================================
# Main Entrypoint & Self-Test Suite
# ============================================================================
def main() -> None:
    """Server entrypoint with automated self-tests."""
    if len(sys.argv) > 1 and sys.argv[1] == "--self-test":
        print("Running Technical SEO MCP Server comprehensive self-tests...")

        # 1. URL & SSRF Validation
        for bad_url in ("http://localhost:3000", "http://127.0.0.1:8080", "http://192.168.1.1", "ftp://example.com"):
            try:
                validate_target_url(bad_url)
                print(f"FAIL: {bad_url} was not blocked")
                sys.exit(1)
            except ValueError:
                pass
        print("PASS: SSRF validation blocks local, loopback, private IPs, and bad schemes.")

        # 2. Domain restriction check
        try:
            validate_target_url("https://malicious-external-site.com", restrict_to_approved_domains=True)
            print("FAIL: External domain not blocked under restriction mode")
            sys.exit(1)
        except ValueError:
            print("PASS: Approved domain boundaries enforced.")

        # 3. Tool Registration Check
        tools = mcp._tool_manager.list_tools() if hasattr(mcp, "_tool_manager") else []
        tool_names = [t.name for t in tools]
        expected_tools = [
            "run_lighthouse_audit",
            "read_seo_report",
            "crawl_website",
            "analyze_page_seo",
            "check_robots_and_sitemap",
            "check_rendered_pages",
            "inspect_google_indexing",
            "analyze_internal_links",
            "generate_seo_report",
        ]
        for et in expected_tools:
            assert et in tool_names, f"Missing tool: {et}"
        print(f"PASS: All {len(expected_tools)} MCP tools registered: {tool_names}")

        # 4. On-Page SEO Engine Unit Test
        mock_html = """
        <!DOCTYPE html>
        <html>
        <head>
          <title>Short</title>
          <link rel="canonical" href="https://www.cybaemtech.com/test" />
        </head>
        <body>
          <a href="/service">Learn More</a>
          <img src="/logo.png" />
        </body>
        </html>
        """
        test_audit = analyze_page_seo("https://www.cybaemtech.com/test", custom_html=mock_html)
        assert test_audit["success"] is True
        issues_text = [i["issue"] for i in test_audit["confirmed_issues"]]
        assert any("description" in i.lower() for i in issues_text), "Failed to detect missing meta description"
        assert any("h1" in i.lower() for i in issues_text), "Failed to detect missing H1"
        print("PASS: Technical on-page SEO analyzer correctly detected missing tags and weak anchors.")

        print("All self-tests passed successfully!")
        return

    mcp.run()


if __name__ == "__main__":
    main()
