import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import {
  homeSeoData,
  aboutSeoData,
  contactSeoData,
  lifeAtCybaemtechSeoData,
  blogSeoData,
  webSystemsSeoData,
  managedITSeoData,
  itAugmentationSeoData,
  digitalMarketingSeoData,
  enterpriseSoftwareSeoData,
  itInfrastructureServicesSeoData,
} from "./seo-config";
import { leadershipSeoData } from "./src/data/seo/leadershipSeo";
import { mobileAppSeoData } from "./src/data/seo/mobileAppSeo";
import { softwareDevelopmentSeoData } from "./src/data/seo/softwareDevelopmentSeo";
import { cloudSecuritySeoData } from "./src/data/seo/cloudSecuritySeo";
import { cloudSolutionsSeoData } from "./src/data/seo/cloudSolutionsSeo";
import { cybersecuritySeoData } from "./src/data/seo/cybersecuritySeo";
import { growthRevenueSeoData } from "./src/data/seo/growthRevenueSeo";
import { managedITContinuitySeoData } from "./src/data/seo/managedITContinuitySeo";
import { managedITPackageIncludedSeoData } from "./src/data/seo/managedITPackageIncludedSeo";
import { managedITBenefitsSeoData } from "./src/data/seo/managedITBenefitsSeo";
import { managedITPricingSeoData } from "./src/data/seo/managedITPricingSeo";
import { managedITCostSeoData } from "./src/data/seo/managedITCostSeo";
import { managedITCaseStudySeoData } from "./src/data/seo/managedITCaseStudySeo";

const BASE_URL = "https://www.cybaemtech.com";

type RouteMeta = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  jsonLd?: unknown[];
};

const routeMeta: Record<string, RouteMeta> = {
  "/": homeSeoData,
  "/about": aboutSeoData,
  "/contact": contactSeoData,
  "/life-at-cybaemtech": lifeAtCybaemtechSeoData,
  "/blog": blogSeoData,
  "/software-platforms/web-systems": webSystemsSeoData,
  "/solutions/it-staff-augmentation": itAugmentationSeoData,
  "/software-platforms/enterprise-software": enterpriseSoftwareSeoData,
  "/cloud-security/it-infrastructure-services": itInfrastructureServicesSeoData,
  "/cloud-security/cloud-solutions": cloudSolutionsSeoData,
  "/cloud-security/cybersecurity": cybersecuritySeoData,
  "/software-platforms/mobile-app-development": mobileAppSeoData,
  "/software-platforms": softwareDevelopmentSeoData,
  "/cloud-security": cloudSecuritySeoData,
  "/digital-growth": growthRevenueSeoData,
  "/leadership": leadershipSeoData,
  "/managed-it/managed-it-infrastructure-engineered-for-business-continuity": managedITContinuitySeoData,
  "/managed-it/what-is-included-in-managed-it-infrastructure-package": managedITPackageIncludedSeoData,
  "/managed-it/benefits-outsourcing-managed-it-infrastructure-services": managedITBenefitsSeoData,
  "/managed-it/support-pricing-models-compared": managedITPricingSeoData,
  "/managed-it/cost-mid-sized-company": managedITCostSeoData,
  "/case-study/eliminating-downtime-risk-and-scaling-hybrid-cloud": managedITCaseStudySeoData,
  "/digital-growth/performance-marketing": {
    title: "Google Ads & Meta Ads Management | CybaemTech",
    description: "We manage Google Ads and Meta Ads built for quality leads, not empty clicks. Get more leads and sales from every rupee you spend.",
    canonical: "/digital-growth/performance-marketing",
  },
  "/digital-growth/social-media-management": {
    title: "Social Media Management Services | CybaemTech",
    description: "Stay active, consistent, and on-brand on the platforms your customers use. We plan, create, and manage your social media so it supports real business goals.",
    canonical: "/digital-growth/social-media-management",
  },
  "/digital-growth/seo-aeo-geo": {
    title: "SEO, AEO & GEO Services | CybaemTech",
    description: "We build SEO that keeps rankings and turns visitors into customers. Get found on search engines, in AI overviews, and in local search.",
    canonical: "/digital-growth/seo-aeo-geo",
  },
  "/careers": {
    title: "Careers at Cybaem Tech | Join Our Innovative Technology Team",
    description: "Build your future with Cybaem Tech. Explore rewarding career opportunities in software development, cloud computing, cybersecurity, digital growth, and IT services.",
    canonical: "/careers",
    keywords: "Cybaem Tech careers, IT jobs Pune, software engineer jobs, web developer openings, cloud security jobs",
  },
  "/cloud-services/aws": {
    title: "AWS Cloud Services & Managed AWS Solutions | CybaemTech",
    description: "CybaemTech provides AWS consulting, migration, security, DevOps, backup, disaster recovery, cost optimization and managed AWS services.",
    canonical: "/cloud-services/aws",
  },
  "/cloud-services/microsoft-azure": {
    title: "Microsoft Azure Cloud Services & Consulting | CybaemTech",
    description: "CybaemTech provides Microsoft Azure consulting, cloud migration, security, Azure DevOps, cost optimization, and managed cloud services.",
    canonical: "/cloud-services/microsoft-azure",
  },
  "/industries/healthcare-technology-solutions": {
    title: "Healthcare Technology Solutions | Cybaem Tech",
    description: "HIPAA-compliant healthcare technology solutions, telemedicine platforms, EHR/EMR integration, and medical software development.",
    canonical: "/industries/healthcare-technology-solutions",
  },
  "/industries/logistics-supply-chain-technology-solutions": {
    title: "Logistics & Supply Chain Technology Solutions | Cybaem Tech",
    description: "Fleet management systems, IoT tracking, automated warehouse management, and intelligent supply chain optimization platforms.",
    canonical: "/industries/logistics-supply-chain-technology-solutions",
  },
  "/industries/financial-services-technology-solutions": {
    title: "Financial Services & Fintech Technology Solutions | Cybaem Tech",
    description: "Secure fintech solutions, banking platforms, automated fraud detection, and regulatory compliance software.",
    canonical: "/industries/financial-services-technology-solutions",
  },
  "/industries/retail-ecommerce-technology-solutions": {
    title: "Retail & E-Commerce Technology Solutions | Cybaem Tech",
    description: "Omnichannel retail software, scalable eCommerce architecture, inventory management, and digital customer experiences.",
    canonical: "/industries/retail-ecommerce-technology-solutions",
  },
  "/industries/education-technology-solutions": {
    title: "Education & EdTech Technology Solutions | Cybaem Tech",
    description: "Scalable LMS platforms, virtual classroom infrastructure, student information systems, and interactive learning tools.",
    canonical: "/industries/education-technology-solutions",
  },
  "/industries/hospitality-technology-solutions": {
    title: "Hospitality & Travel Technology Solutions | Cybaem Tech",
    description: "Guest management systems, automated booking engines, POS integration, and hospitality digital solutions.",
    canonical: "/industries/hospitality-technology-solutions",
  },
  "/industries/manufacturing-technology-solutions": {
    title: "Manufacturing & Industry 4.0 Technology Solutions | Cybaem Tech",
    description: "Smart factory automation, IoT monitoring, predictive maintenance, and enterprise supply chain execution.",
    canonical: "/industries/manufacturing-technology-solutions",
  },
  "/industries/real-estate-technology-solutions": {
    title: "Real Estate & PropTech Technology Solutions | Cybaem Tech",
    description: "PropTech solutions, property management platforms, virtual tour systems, and real estate CRM software.",
    canonical: "/industries/real-estate-technology-solutions",
  },
  "/in/software-company-in-pune": {
    title: "Software Company in Pune | Cybaem Tech, Hinjewadi",
    description: "We are a leading software company in Pune offering custom software development, cloud computing, cybersecurity, and digital growth solutions.",
    canonical: "/in/software-company-in-pune",
  },
  "/product": {
    title: "AI Smart Pen & Products | Cybaem Tech",
    description: "Discover innovative hardware and software products by Cybaem Tech designed to transform business productivity.",
    canonical: "/product",
  },
  "/product/crm": {
    title: "Cybaem Nova CRM Platform | Cybaem Tech",
    description: "Cybaem Nova AI-Powered CRM platform with predictive lead scoring, pipeline management, and omnichannel communication.",
    canonical: "/product/crm",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Cybaem Tech Pvt Ltd",
    description: "Read the privacy policy of Cybaem Tech Pvt Ltd covering data collection, usage, and protection practices.",
    canonical: "/privacy-policy",
  },
  "/terms-of-service": {
    title: "Terms of Service | Cybaem Tech Pvt Ltd",
    description: "Read the terms of service for Cybaem Tech Pvt Ltd's IT services, software development and digital marketing solutions.",
    canonical: "/terms-of-service",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Cybaem Tech Pvt Ltd",
    description: "Learn about how Cybaem Tech Pvt Ltd uses cookies and similar technologies on our website.",
    canonical: "/cookie-policy",
  },
  "/refund-cancellation-policy": {
    title: "Refund & Cancellation Policy | Cybaem Tech Pvt Ltd",
    description: "Read the refund and cancellation policy for Cybaem Tech Pvt Ltd services.",
    canonical: "/refund-cancellation-policy",
  },
  "/accessibility": {
    title: "Accessibility Statement | Cybaem Tech",
    description: "Cybaem Tech is committed to ensuring digital accessibility for people with disabilities.",
    canonical: "/accessibility",
  },
  "/videos": {
    title: "Official Videos & Watch Pages | Cybaem Tech",
    description: "Explore official videos from Cybaem Tech featuring our IT infrastructure setups, corporate milestones, team culture, and enterprise tech solutions.",
    canonical: "/videos",
  },
  "/videos/foundation-day-celebration-2026": {
    title: "Foundation Day Celebration 2026 | Cybaem Tech Videos",
    description: "Here are the highlights from Cybaem Tech's 6th Foundation Day Celebration! From the grand cake cutting and team speeches to gift exchanges and memorable group moments, see how the Cybaem Tech family celebrated six years of innovation, growth, and going Beyond Limits.",
    canonical: "/videos/foundation-day-celebration-2026",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": "https://www.cybaemtech.com/videos/foundation-day-celebration-2026#video",
        name: "Foundation Day Celebration 2026",
        description: "Here are the highlights from Cybaem Tech's 6th Foundation Day Celebration! From the grand cake cutting and team speeches to gift exchanges and memorable group moments, see how the Cybaem Tech family celebrated six years of innovation, growth, and going Beyond Limits.",
        thumbnailUrl: "https://www.cybaemtech.com/video/thumbnails/foundation-day-celebration-2026.jpg",
        uploadDate: "2026-11-06",
        duration: "PT40S",
        contentUrl: "https://cybaemtech.com/video/video.mp4",
        url: "https://www.cybaemtech.com/videos/foundation-day-celebration-2026"
      }
    ]
  },
  "/videos/it-infrastructure-setup-for-smarter-business-connectivity": {
    title: "IT Infrastructure Setup for Smarter Business Connectivity | Cybaem Tech Videos",
    description: "We build a reliable, high-performance IT foundation designed for seamless business operations and growth. From robust firewall security and high-speed networking to optimized servers, VLANs, enterprise Wi-Fi, and automated backup solutions, we cover everything needed to keep your organization connected and secure.",
    canonical: "/videos/it-infrastructure-setup-for-smarter-business-connectivity",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": "https://www.cybaemtech.com/videos/it-infrastructure-setup-for-smarter-business-connectivity#video",
        name: "IT Infrastructure Setup for Smarter Business Connectivity",
        description: "We build a reliable, high-performance IT foundation designed for seamless business operations and growth. From robust firewall security and high-speed networking to optimized servers, VLANs, enterprise Wi-Fi, and automated backup solutions, we cover everything needed to keep your organization connected and secure.",
        thumbnailUrl: "https://www.cybaemtech.com/video/thumbnails/it-infrastructure-setup-for-smarter-business-connectivity.jpg",
        uploadDate: "2026-11-06",
        duration: "PT47S",
        contentUrl: "https://cybaemtech.com/video/it-infrastructure-setup.mp4",
        url: "https://www.cybaemtech.com/videos/it-infrastructure-setup-for-smarter-business-connectivity"
      }
    ]
  },
};

const routeAliases: Record<string, string> = {
  "/approach": "/life-at-cybaemtech",
  "/resources": "/blog",
  "/solutions/it-augmentation": "/solutions/it-staff-augmentation",
  "/solutions/digital-marketing": "/digital-growth/performance-marketing",
  "/solutions/digital-revenue-growth": "/digital-growth/performance-marketing",
    "/performance-marketing": "/digital-growth/performance-marketing",
  "/social-media-management": "/digital-growth/social-media-management",
  "/solutions/social-media-management": "/digital-growth/social-media-management",
  "/digital-marketing/seo-aeo-geo": "/digital-growth/seo-aeo-geo",
  "/seo-aeo-geo": "/digital-growth/seo-aeo-geo",
  "/solutions/seo-aeo-geo": "/digital-growth/seo-aeo-geo",
  "/digital-marketing/seo": "/digital-growth/seo-aeo-geo",
  "/solutions/it-infrastructure-services": "/cloud-security/it-infrastructure-services",
  "/solutions/it-infrastructure": "/cloud-security/it-infrastructure-services",
  "/it-infrastructure-services": "/cloud-security/it-infrastructure-services",
  "/it-infrastructure": "/cloud-security/it-infrastructure-services",
  "/it-staff-augmentation": "/cloud-security/it-infrastructure-services",
  "/managed-it": "/cloud-security/it-infrastructure-services",
  "/managed-it-cloud-security": "/solutions/cloud-security",
  "/digital-marketing": "/digital-growth/performance-marketing",
  "/solutions/managed-it": "/solutions/cloud-security",
  "/solutions/enterprise-software": "/software-platforms/enterprise-software",
  "/solutions/enterprise-software-development": "/software-platforms/enterprise-software",
  "/enterprise-software-development": "/software-platforms/enterprise-software",
  "/enterprise-software": "/software-platforms/enterprise-software",
  "/solutions/mobile-app-development": "/software-platforms/mobile-app-development",
  "/solutions/mobile-app": "/software-platforms/mobile-app-development",
  "/solutions/mobile-apps": "/software-platforms/mobile-app-development",
  "/mobile-app-development": "/software-platforms/mobile-app-development",
  "/mobile-app": "/software-platforms/mobile-app-development",
  "/solutions/web-systems": "/software-platforms/web-systems",
  "/web-systems": "/software-platforms/web-systems",
  "/solutions/software-platforms": "/software-platforms",
  "/solutions/software-development": "/software-platforms",
  "/software-development": "/software-platforms",
  "/solutions/software": "/software-platforms",
  "/solutions/Software-Platforms": "/software-platforms",
  "/solutions/Software & Platforms": "/software-platforms",
  "/solutions/Software%20&%20Platforms": "/software-platforms",
  "/solutions/software-and-platforms": "/software-platforms",
  "/software-and-platforms": "/software-platforms",
  "/solutions/cloud-security": "/cloud-security",
  "/solutions/Cloud & Security": "/cloud-security",
  "/solutions/Cloud%20&%20Security": "/cloud-security",
  "/solutions/cloud-and-security": "/cloud-security",
  "/cloud-solutions": "/cloud-security/cloud-solutions",
  "/solutions/cloud-solutions": "/cloud-security/cloud-solutions",
  "/solutions/cloud": "/cloud-security/cloud-solutions",
  "/cloud-services": "/cloud-security/cloud-solutions",
  "/cybersecurity": "/cloud-security/cybersecurity",
  "/solutions/cybersecurity": "/cloud-security/cybersecurity",
  "/solutions/Growth-Revenue": "/digital-growth",
  "/solutions/Growth & Revenue": "/digital-growth",
  "/solutions/Growth%20&%20Revenue": "/digital-growth",
  "/solutions/growth-and-revenue": "/digital-growth",
  "/solutions/growth-revenue": "/digital-growth",
  "/growth-and-revenue": "/digital-growth",
  "/growth-revenue": "/digital-growth",
};

const routeToSeoFileName: Record<string, string> = {
  "/": "Home Page - SEO, AEO & GEO Setup File.html",
  "/about": "About Page - SEO Setup.html",
  "/contact": "Contact Page - SEO Setup.html",
  "/life-at-cybaemtech": "Life at Cybaemtech - SEO Setup.html",
  "/blog": "Resource Page - SEO Setup Code.html",
  "/software-platforms/web-systems": "web-systems.html",
  "/solutions/it-staff-augmentation": "IT Agumentation - SEO Setup.html",
  "/solutions/digital-revenue-growth": "digital marketing.html",
  "/cloud-security/it-infrastructure-services": "it-infrastructure-services.html",
  "/cloud-security/cloud-solutions": "",
  "/cloud-security/cybersecurity": "",
  "/software-platforms/enterprise-software": "enterprise-software.html",
  "/software-platforms/mobile-app-development": "",
  "/software-platforms": "",
  "/cloud-security": "",
  "/digital-growth": "",
  "/portfolio": "portfolio.html",
  "/leadership": "leadership.html",
  "/leadership/rohan-bhosale": "leadership-rohan-bhosale.html",
  "/leadership/akshay-navle": "leadership-akshay-navle.html",
  "/leadership/yash-bhalekar": "leadership-yash-bhalekar.html",
  "/leadership/dilip-dsouza": "leadership-dilip-dsouza.html",
  "/leadership/sanjay-mahadeo-bobde": "leadership-sanjay-mahadeo-bobde.html",
  "/careers": "",
  "/cloud-services/aws": "",
  "/cloud-services/microsoft-azure": "",
  "/digital-growth/performance-marketing": "",
  "/digital-growth/social-media-management": "",
  "/digital-growth/seo-aeo-geo": "",
  "/industries/healthcare-technology-solutions": "",
  "/industries/logistics-supply-chain-technology-solutions": "",
  "/industries/financial-services-technology-solutions": "",
  "/industries/retail-ecommerce-technology-solutions": "",
  "/industries/education-technology-solutions": "",
  "/industries/hospitality-technology-solutions": "",
  "/industries/manufacturing-technology-solutions": "",
  "/industries/real-estate-technology-solutions": "",
  "/in/software-company-in-pune": "",
  "/product": "",
  "/product/crm": "",
  "/privacy-policy": "",
  "/terms-of-service": "",
  "/cookie-policy": "",
  "/refund-cancellation-policy": "",
  "/accessibility": "",
  "/videos": "",
  "/videos/foundation-day-celebration-2026": "",
  "/videos/it-infrastructure-setup-for-smarter-business-connectivity": "",
  "/managed-it/managed-it-infrastructure-engineered-for-business-continuity": "",
  "/managed-it/what-is-included-in-managed-it-infrastructure-package": "",
  "/managed-it/benefits-outsourcing-managed-it-infrastructure-services": "",
  "/managed-it/support-pricing-models-compared": "",
  "/managed-it/cost-mid-sized-company": "",
  "/case-study/eliminating-downtime-risk-and-scaling-hybrid-cloud": "",
};

const routesToProcess = Object.keys(routeToSeoFileName);

const targetRouteToSourceLabel: Record<string, string> = {
  "/": "src/data/seo/homeSeo.ts",
  "/about": "src/data/seo/aboutSeo.ts",
  "/contact": "src/data/seo/contactSeo.ts",
  "/life-at-cybaemtech": "src/data/seo/lifeAtCybaemtechSeo.ts",
  "/blog": "src/data/seo/blogSeo.ts",
  "/software-platforms/web-systems": "src/data/seo/webSystemsSeo.ts",
  "/solutions/it-staff-augmentation": "src/data/seo/itStaffAugmentationSeo.ts",
  "/solutions/digital-revenue-growth": "src/data/seo/digitalGrowthSeo.ts",
  "/solutions/cloud-security": "src/data/seo/cloudSecuritySeo.ts",
  "/cloud-security/it-infrastructure-services": "src/data/seo/itInfrastructureServicesSeo.ts",
  "/cloud-security/cloud-solutions": "src/data/seo/cloudSolutionsSeo.ts",
  "/cloud-security/cybersecurity": "src/data/seo/cybersecuritySeo.ts",
  "/software-platforms/enterprise-software": "src/data/seo/enterpriseSoftwareSeo.ts",
  "/software-platforms/mobile-app-development": "src/data/seo/mobileAppSeo.ts",
  "/software-platforms": "src/data/seo/softwareDevelopmentSeo.ts",
  "/cloud-security": "src/data/seo/cloudSecuritySeo.ts",
  "/digital-growth": "src/data/seo/growthRevenueSeo.ts",
  "/leadership": "src/data/seo/leadershipSeo.ts",
  "/managed-it/managed-it-infrastructure-engineered-for-business-continuity": "src/data/seo/managedITContinuitySeo.ts",
  "/managed-it/what-is-included-in-managed-it-infrastructure-package": "src/data/seo/managedITPackageIncludedSeo.ts",
  "/managed-it/benefits-outsourcing-managed-it-infrastructure-services": "src/data/seo/managedITBenefitsSeo.ts",
  "/managed-it/support-pricing-models-compared": "src/data/seo/managedITPricingSeo.ts",
  "/managed-it/cost-mid-sized-company": "src/data/seo/managedITCostSeo.ts",
  "/case-study/eliminating-downtime-risk-and-scaling-hybrid-cloud": "src/data/seo/managedITCaseStudySeo.ts",
};

function escHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildSeoHtml(meta: RouteMeta) {
  let canonical = meta.canonical.startsWith("http") ? meta.canonical : `${BASE_URL}${meta.canonical}`;
  canonical = canonical.replace(/^https?:\/\/(?:www\.)?cybaemtech\.com/i, BASE_URL);
  const ogImg = "https://www.cybaemtech.com/images/cybaem-logo.webp";
  const parts = [
    `<title>${escHtml(meta.title)}</title>`,
    `<meta name="description" content="${escHtml(meta.description)}">`,
    `<meta name="keywords" content="${escHtml(meta.keywords || "")}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${escHtml(meta.ogTitle || meta.title)}">`,
    `<meta property="og:description" content="${escHtml(meta.ogDescription || meta.description)}">`,
    `<meta property="og:image" content="${ogImg}">`,
    `<meta property="og:site_name" content="Cybaem Tech">`,
    `<meta property="og:locale" content="en_IN">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escHtml(meta.twitterTitle || meta.ogTitle || meta.title)}">`,
    `<meta name="twitter:description" content="${escHtml(meta.twitterDescription || meta.ogDescription || meta.description)}">`,
    `<meta name="twitter:image" content="${ogImg}">`,
  ];

  if (meta.jsonLd?.length) {
    for (const schema of meta.jsonLd) {
      parts.push(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
    }
  }

  return parts.join("\n");
}

function extractHtmlFromContent(content: string): string {
  const cleaned = content.replace(/```html/gi, "").replace(/```/g, "");
  const firstTagIndex = cleaned.search(/<(?:!--|meta|title|link|script|style)/i);
  if (firstTagIndex !== -1) {
    return cleaned.slice(firstTagIndex).trim();
  }
  return cleaned.trim();
}

function injectSeoIntoHtml(html: string, seoContent: string, sourceLabel: string) {
  const seoBlock = `<!-- SEO_INJECT_START -->\n<!-- SEO SOURCE: ${sourceLabel} -->\n${seoContent}\n<!-- SEO_INJECT_END -->`;
  const cleaned = html.replace(/<!-- SEO_INJECT_START -->[\s\S]*?<!-- SEO_INJECT_END -->\n?/g, "");
  return cleaned.replace("</head>", `${seoBlock}\n</head>`);
}

const GOOGLE_SHEETS_API =
  "https://docs.google.com/spreadsheets/d/1fI_YaQF9y53wjRBKwi_T7SGCTqkz_1gLDvWbA1zp8P4/gviz/tq?tqx=out:json&sheet=Sheet1";

const DECOMMISSIONED_BLOG_SLUGS = new Set([
  "how-pune-clinics-doctors-can-get-more-leads-with-digital-marketing",
  "how-saas-startups-in-pune-can-scale-faster-with-seo-google-ads",
  "how-saas-startups-in-pune-can-scale-faster-with-seo-googleads",
  "the-role-of-content-marketing-in-building-a-strong-business-brand-online",
  "the-role-of-content-marketing-in-building-a-strong-business-brandonline",
  "business-technology-trends-in-2026-smarter-digital-solutions-for-growth",
  "business-technology-trends-in-2026-smarter-digital-solutionsfor-growth",
  "from-data-to-delight-how-ai-personalization-shapes-the-modern-customer-journey",
  "real-estate-co-working-lead-generation-with-meta-and-google-ads-digital-marketing-company-in-pune",
  "the-rise-of-ai-driven-personalization-crafting-experiences-that-convert",
  "how-to-build-a-brand-from-the-ground-up-with-digital-marketing",
  "why-authenticity-beats-algorithms-in-modern-marketing",
  "brand-storytelling-that-actually-resonates-in-a-noisy-world",
]);

async function fetchBlogPostsForSeo() {
  try {
    const response = await fetch(GOOGLE_SHEETS_API);
    if (!response.ok) throw new Error("Google Sheets fetch failed");
    const text = await response.text();
    const jsonStr = text.substring(47).slice(0, -2);
    const json = JSON.parse(jsonStr);

    const headers = json.table.cols.map((col: any) => col.label);
    const data = json.table.rows.map((row: any) => {
      const obj: Record<string, string> = {};
      headers.forEach((header: string, index: number) => {
        obj[header] = row.c?.[index]?.v ?? "";
      });
      return obj;
    });

    return data
      .filter((row: any) => {
        const isBlog = String(row["Blog"]).trim().toUpperCase() === "YES";
        const slug = String(row["Slug"] || "").trim();
        return isBlog && !DECOMMISSIONED_BLOG_SLUGS.has(slug);
      })
      .map((row: any, index: number) => {
        const rawContent = row["Content"] || "";
        const cleanContent = rawContent.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
        const excerpt = cleanContent ? cleanContent.substring(0, 180) + "..." : "";
        return {
          slug: row["Slug"] || `wordpress-post-${index}`,
          title: row["Title"] || "Untitled",
          image: row["Image URL"] || null,
          excerpt,
          publishedAt: row["Published Date"] || null,
        };
      });
  } catch (error) {
    console.warn("Could not fetch Google Sheets blog data, using fallback slugs:", error);
    return [];
  }
}

export default defineConfig(() => ({
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/contact.php": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/careers.php": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/blog-api.php": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/auth.php": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  appType: "spa",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2015",
  },
  plugins: [
    react(),
    {
      name: "route-seo-dev-html",
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          try {
            let url = req.url?.split("?")[0] || "/";
            if (url.endsWith("/") && url !== "/") {
              url = url.slice(0, -1);
            }
            if (!url.includes(".")) {
              const cleanUrl = url.startsWith("/") ? url.substring(1) : url;
              const distDir = path.resolve(__dirname, "dist");
              const candidatePaths = [
                path.join(distDir, cleanUrl, "index.html"),
                path.join(distDir, `${cleanUrl}.html`)
              ];
              for (const candidate of candidatePaths) {
                if (fs.existsSync(candidate)) {
                  res.setHeader("Content-Type", "text/html; charset=utf-8");
                  fs.createReadStream(candidate).pipe(res);
                  return;
                }
              }
            }
            next();
          } catch (e) {
            next(e);
          }
        });
      },
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          try {
            let url = req.url?.split("?")[0] || "/";
            // Normalize trailing slash (except for root "/")
            if (url.endsWith("/") && url !== "/") {
              url = url.slice(0, -1);
            }
            if (!routesToProcess.includes(url)) return next();

            const htmlPath = path.resolve(__dirname, "index.html");
            if (!fs.existsSync(htmlPath)) return next();

            let html = fs.readFileSync(htmlPath, "utf-8");

            let seoContent = "";
            let sourceLabel = "";

            const fileName = routeToSeoFileName[url];
            if (fileName) {
              const seoFilePath = path.resolve(__dirname, "SEO files", fileName);
              if (fs.existsSync(seoFilePath)) {
                const rawContent = fs.readFileSync(seoFilePath, "utf-8");
                seoContent = extractHtmlFromContent(rawContent);
                sourceLabel = `SEO files/${fileName}`;
              }
            }

            // Fallback
            if (!seoContent) {
              const targetRoute = routeMeta[url] ? url : routeAliases[url] || null;
              if (targetRoute) {
                const meta = routeMeta[targetRoute];
                seoContent = buildSeoHtml(meta);
                sourceLabel = targetRouteToSourceLabel[targetRoute] || "seo-config.ts";
              }
            }

            if (seoContent) {
              html = injectSeoIntoHtml(html, seoContent, sourceLabel);
            }

            // Pass the HTML through Vite's internal transformers (preamble, HMR client, etc.)
            const transformedHtml = await server.transformIndexHtml(req.url || url, html);

            res.setHeader("Content-Type", "text/html");
            res.end(transformedHtml);
          } catch (e) {
            next(e);
          }
        });
      },
      async closeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        const baseHtmlPath = path.join(distDir, "index.html");
        if (!fs.existsSync(baseHtmlPath)) {
          console.warn("Could not find dist/index.html for SEO injection.");
          return;
        }

        const baseHtml = fs.readFileSync(baseHtmlPath, "utf-8");

        const generateRouteHtml = (route: string, seoContent: string, sourceLabel: string) => {
          const stripped = baseHtml.replace(/<!-- SEO_INJECT_START -->[\s\S]*?<!-- SEO_INJECT_END -->\n?/g, "");
          const injected = injectSeoIntoHtml(stripped, seoContent, sourceLabel);

          if (route === "/") {
            fs.writeFileSync(baseHtmlPath, injected);
          } else {
            const cleanRoute = route.startsWith("/") ? route.substring(1) : route;
            const routeDir = path.join(distDir, cleanRoute);
            fs.mkdirSync(routeDir, { recursive: true });
            fs.writeFileSync(path.join(routeDir, "index.html"), injected);

            const flatHtmlPath = path.join(distDir, `${cleanRoute}.html`);
            const flatParentDir = path.dirname(flatHtmlPath);
            if (!fs.existsSync(flatParentDir)) {
              fs.mkdirSync(flatParentDir, { recursive: true });
            }
            fs.writeFileSync(flatHtmlPath, injected);
          }
        };

        for (const route of routesToProcess) {
          let seoContent = "";
          let sourceLabel = "";

          const fileName = routeToSeoFileName[route];
          if (fileName) {
            const seoFilePath = path.resolve(__dirname, "SEO files", fileName);
            if (fs.existsSync(seoFilePath)) {
              const rawContent = fs.readFileSync(seoFilePath, "utf-8");
              seoContent = extractHtmlFromContent(rawContent);
              sourceLabel = `SEO files/${fileName}`;
            }
          }

          // Fallback
          if (!seoContent) {
            const targetRoute = routeMeta[route] ? route : routeAliases[route] || null;
            if (targetRoute) {
              const meta = routeMeta[targetRoute];
              seoContent = buildSeoHtml(meta);
              sourceLabel = targetRouteToSourceLabel[targetRoute] || "seo-config.ts";
            }
          }

          if (seoContent) {
            generateRouteHtml(route, seoContent, sourceLabel);
          }
        }

        // Prerender all dynamic blog posts with self-referencing canonical tags
        const blogs = await fetchBlogPostsForSeo();
        for (const blog of blogs) {
          const canonical = `/blog/${blog.slug}`;
          const fullCanonical = `${BASE_URL}${canonical}`;
          const title = `${blog.title} | Cybaem Tech Blog`;
          const desc = blog.excerpt || `Read ${blog.title} on the Cybaem Tech blog.`;
          const ogImg = blog.image || "https://www.cybaemtech.com/images/cybaem-logo.webp";

          const blogMeta: RouteMeta = {
            title,
            description: desc,
            canonical,
            keywords: `${blog.title}, Cybaem Tech blog, IT strategy Pune, digital transformation`,
            ogTitle: title,
            ogDescription: desc,
            twitterTitle: title,
            twitterDescription: desc,
            jsonLd: [
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "@id": `${fullCanonical}#article`,
                headline: blog.title,
                description: desc,
                image: ogImg,
                url: fullCanonical,
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": fullCanonical,
                },
                publisher: {
                  "@type": "Organization",
                  "@id": `${BASE_URL}/#organization`,
                  name: "Cybaem Tech Pvt. Ltd.",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.cybaemtech.com/images/cybaem-logo.webp",
                  },
                },
                author: {
                  "@type": "Organization",
                  name: "Cybaem Tech Editorial Team",
                  url: BASE_URL,
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "@id": `${fullCanonical}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
                  { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
                  { "@type": "ListItem", position: 3, name: blog.title, item: fullCanonical },
                ],
              },
            ],
          };

          const blogSeoContent = buildSeoHtml(blogMeta);
          generateRouteHtml(canonical, blogSeoContent, `Google Sheets: /blog/${blog.slug}`);

          // Also prerender slug variations so crawlers always receive canonicalized HTML
          if (blog.slug === "best-digital-marketing-strategy-for-pune-it-saas-companies-cybaem-tech") {
            generateRouteHtml(
              "/blog/best-digital-marketing-strategy-for-pune-it-saas-companiescybaem-tech",
              blogSeoContent,
              "Google Sheets Alias: /blog/best-digital-marketing-strategy-for-pune-it-saas-companiescybaem-tech"
            );
          }
          if (blog.slug === "strengthening-digital-trust-why-cybersecurity-is-every-businesss-priority") {
            generateRouteHtml(
              "/blog/strengthening-digital-trust-why-cybersecurity-is-every-business-priority",
              blogSeoContent,
              "Google Sheets Alias: /blog/strengthening-digital-trust-why-cybersecurity-is-every-business-priority"
            );
          }
        }
      },
    },
  ],
}));
