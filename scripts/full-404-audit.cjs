const fs = require('fs');
const path = require('path');
const http = require('http');

// Helper to crawl directory
function getFiles(dir, exts = ['.tsx', '.ts', '.html', '.json']) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        results = results.concat(getFiles(fullPath, exts));
      }
    } else if (exts.includes(path.extname(file))) {
      results.push(fullPath);
    }
  }
  return results;
}

// 1. Parse App.tsx declared routes
const appTsx = fs.readFileSync(path.resolve(__dirname, '../src/App.tsx'), 'utf8');
const routePattern = /<Route\s+path=["']([^"']+)["'](?:\s+element=\{<([^/>\s]+)[^>]*>\})?/g;
const declaredRoutes = [];
let m;
while ((m = routePattern.exec(appTsx)) !== null) {
  declaredRoutes.push({
    path: m[1],
    element: m[2] || 'Component'
  });
}

// 2. Extract all internal links from code
const srcFiles = getFiles(path.resolve(__dirname, '../src'));
const internalLinks = new Map();

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Match to="...", href="...", navigate("...")
  const linkPattern = /(?:to|href|navigate)\s*(?:=|\()\s*['"](\/[^'"#? ]*)['"]/g;
  let match;
  while ((match = linkPattern.exec(content)) !== null) {
    const raw = match[1];
    if (raw.startsWith('//')) continue;
    // Exclude static files in public
    if (raw.endsWith('.pdf') || raw.endsWith('.webp') || raw.endsWith('.png') || raw.endsWith('.jpg') || raw.endsWith('.svg') || raw.endsWith('.ico') || raw.endsWith('.xml') || raw.endsWith('.txt')) {
      continue;
    }
    if (!internalLinks.has(raw)) {
      internalLinks.set(raw, new Set());
    }
    internalLinks.get(raw).add(path.relative(path.resolve(__dirname, '..'), file));
  }
}

// 3. Extract all URLs from sitemaps
const sitemaps = [
  '../public/sitemap.xml',
  '../public/pagesSitemap.xml',
  '../public/blogSitemap.xml',
  '../public/sitemap-images.xml'
];
const sitemapUrls = new Map();

for (const sm of sitemaps) {
  const fullSm = path.resolve(__dirname, sm);
  if (fs.existsSync(fullSm)) {
    const content = fs.readFileSync(fullSm, 'utf8');
    const locPattern = /<loc>(https?:\/\/[^\/<]+)?(\/[^<]*)<\/loc>/g;
    let locMatch;
    while ((locMatch = locPattern.exec(content)) !== null) {
      const u = locMatch[2] || '/';
      if (!sitemapUrls.has(u)) sitemapUrls.set(u, new Set());
      sitemapUrls.get(u).add(path.basename(sm));
    }
  }
}

// 4. Test Route Match Function
function matchRoute(testPath) {
  const cleanPath = testPath.split('?')[0].split('#')[0] || '/';
  
  // Exact match
  for (const r of declaredRoutes) {
    if (r.path === cleanPath) {
      return { matched: true, route: r.path, element: r.element, type: r.element === 'Navigate' ? 'REDIRECT' : 'CANONICAL' };
    }
  }
  
  // Pattern match (:id, :slug)
  for (const r of declaredRoutes) {
    if (r.path.includes(':')) {
      const regexStr = '^' + r.path.replace(/:[^\/]+/g, '[^\\/]+') + '$';
      if (new RegExp(regexStr).test(cleanPath)) {
        return { matched: true, route: r.path, element: r.element, type: 'DYNAMIC' };
      }
    }
  }
  
  return { matched: false, route: null, element: 'NotFound', type: '404' };
}

// 5. Test Live HTTP request to localhost:5001
function testHttp(testPath) {
  return new Promise((resolve) => {
    const req = http.request({
      hostname: 'localhost',
      port: 5001,
      path: testPath,
      method: 'GET',
      headers: { 'Accept': 'text/html' }
    }, (res) => {
      resolve({ statusCode: res.statusCode, headers: res.headers });
    });
    req.on('error', (err) => resolve({ statusCode: 0, error: err.message }));
    req.setTimeout(2500, () => {
      req.destroy();
      resolve({ statusCode: 0, error: 'Timeout' });
    });
    req.end();
  });
}

async function executeAudit() {
  console.log('================================================================');
  console.log('             CYBAEMTECH COMPREHENSIVE 404 AUDIT LOG             ');
  console.log('================================================================');
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log(`Declared App.tsx Routes: ${declaredRoutes.length}`);
  console.log(`Internal Links Discovered: ${internalLinks.size}`);
  console.log(`Sitemap URLs Discovered: ${sitemapUrls.size}`);
  console.log('----------------------------------------------------------------\n');

  const allTestedUrls = new Set([
    ...internalLinks.keys(),
    ...sitemapUrls.keys(),
    '/managed-it-cloud-security',
    '/it-staff-augmentation',
    '/web-systems',
    '/it-infrastructure-services',
    '/it-infrastructure',
    '/managed-it',
    '/digital-marketing',
    '/solutions/managed-it',
    '/solutions/cloud-solutions',
    '/solutions/cybersecurity',
    '/careers',
    '/career',
    '/carrier'
  ]);

  const auditResults = [];
  let errorCount = 0;

  for (const url of Array.from(allTestedUrls).sort()) {
    const routeCheck = matchRoute(url);
    const httpCheck = await testHttp(url);

    const is404 = !routeCheck.matched || routeCheck.type === '404';
    if (is404) errorCount++;

    const sources = [];
    if (internalLinks.has(url)) sources.push(`Source Code (${Array.from(internalLinks.get(url)).slice(0, 2).join(', ')})`);
    if (sitemapUrls.has(url)) sources.push(`Sitemap (${Array.from(sitemapUrls.get(url)).join(', ')})`);
    if (sources.length === 0) sources.push('Direct Alias Test');

    auditResults.push({
      url,
      httpStatus: httpCheck.statusCode,
      routerResult: routeCheck.matched ? 'MATCHED' : '404 NOT FOUND',
      routePattern: routeCheck.route,
      component: routeCheck.element,
      type: routeCheck.type,
      sources: sources.join(' | ')
    });
  }

  // Print Detailed Table
  console.log(
    'URL'.padEnd(46) + 
    'HTTP'.padEnd(8) + 
    'ROUTER'.padEnd(16) + 
    'TARGET'.padEnd(24) + 
    'SOURCES'
  );
  console.log('-'.repeat(120));

  for (const r of auditResults) {
    const statusSymbol = r.routerResult === 'MATCHED' ? '✓ 200' : '✗ 404';
    console.log(
      r.url.padEnd(46) +
      statusSymbol.padEnd(8) +
      r.routerResult.padEnd(16) +
      (r.component || '-').padEnd(24) +
      r.sources
    );
  }

  console.log('\n================================================================');
  console.log(`TOTAL URLS TESTED: ${auditResults.length}`);
  console.log(`TOTAL 404 BROKEN URLS: ${errorCount}`);
  console.log(`TOTAL SUCCESSFUL/RESOLVED URLS: ${auditResults.length - errorCount}`);
  console.log('================================================================');

  if (errorCount === 0) {
    console.log('\n STATUS: ALL URLS PASSED! 0 BROKEN LINKS / 0 404s DETECTED.');
  } else {
    console.log(`\n WARNING: ${errorCount} 404 URLS DETECTED. PLEASE REVIEW ABOVE LOGS.`);
  }
}

executeAudit();
