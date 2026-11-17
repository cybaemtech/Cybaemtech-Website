const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const seoDataDir = path.join(srcDir, 'data/seo');
const seoFilesDir = path.join(rootDir, 'SEO files');
const pagesDir = path.join(srcDir, 'pages');

console.log('====================================================');
console.log('COMPREHENSIVE PAGE & SCHEMA AUDIT');
console.log('====================================================\n');

let totalChecks = 0;
let passedChecks = 0;
let warnings = [];

function check(label, condition, details = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`[PASS] ${label}`);
  } else {
    warnings.push(`${label} - ${details}`);
    console.error(`[FAIL] ${label} - ${details}`);
  }
}

// 1. Verify Pages in src/pages
const pages = [
  { name: 'Home (Index.tsx)', file: 'Index.tsx', seoImport: 'homeSeoData' },
  { name: 'About (About.tsx)', file: 'About.tsx', seoImport: 'aboutSeoData' },
  { name: 'Contact (Contact.tsx)', file: 'Contact.tsx', seoImport: 'contactSeoData' },
  { name: 'Leadership (Leadership.tsx)', file: 'Leadership.tsx', seoImport: 'leadershipSeoData' },
  { name: 'LeaderProfile (LeaderProfile.tsx)', file: 'LeaderProfile.tsx', seoImport: 'leaderProfilesJsonLd' },
  { name: 'Approach / Life (Approach.tsx)', file: 'Approach.tsx', seoImport: 'lifeAtCybaemtechSeoData' },
  { name: 'Portfolio (Portfolio.tsx)', file: 'Portfolio.tsx', seoImport: 'portfolioSeoData' },
  { name: 'EnterpriseSoftware (EnterpriseSoftware.tsx)', file: 'EnterpriseSoftware.tsx', seoImport: 'enterpriseSoftwareSeoData' },
  { name: 'WebSystems (WebSystems.tsx)', file: 'WebSystems.tsx', seoImport: 'webSystemsSeoData' },
  { name: 'ITStaffAugmentation (ITStaffAugmentation.tsx)', file: 'ITStaffAugmentation.tsx', seoImport: 'itStaffAugmentationSeoData' },
  { name: 'ManagedIT (ManagedIT.tsx)', file: 'ManagedIT.tsx', seoImport: 'managedITSeoData' },
  { name: 'DigitalGrowth (DigitalGrowth.tsx)', file: 'DigitalGrowth.tsx', seoImport: 'digitalGrowthSeoData' },
  { name: 'ITInfrastructure (ITInfrastructure.tsx)', file: 'ITInfrastructure.tsx', seoImport: 'itInfrastructureSeoData' },
  { name: 'Blog (Blog.tsx)', file: 'Blog.tsx', seoImport: 'blogSeoData' }
];

console.log('--- 1. React Pages & SEO Integration ---');
for (const p of pages) {
  const filePath = path.join(pagesDir, p.file);
  const exists = fs.existsSync(filePath);
  check(`Page File Exists: ${p.file}`, exists);
  if (exists) {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasSEOHead = content.includes('<SEOHead');
    check(`SEOHead Component Present: ${p.file}`, hasSEOHead);
    const hasJsonLd = content.includes('jsonLd=');
    check(`jsonLd Prop Bound: ${p.file}`, hasJsonLd);
  }
}

// 2. Verify Schema files in src/data/seo
console.log('\n--- 2. Structured JSON-LD Data Modules ---');
const seoTsFiles = [
  'homeSeo.ts',
  'aboutSeo.ts',
  'contactSeo.ts',
  'leadershipSeo.ts',
  'leaderProfilesSeo.ts',
  'lifeAtCybaemtechSeo.ts',
  'portfolioSeo.ts',
  'enterpriseSoftwareSeo.ts',
  'webSystemsSeo.ts',
  'itStaffAugmentationSeo.ts',
  'managedITSeo.ts',
  'digitalGrowthSeo.ts',
  'itInfrastructureSeo.ts',
  'solutionsSeo.ts'
];

for (const f of seoTsFiles) {
  const filePath = path.join(seoDataDir, f);
  const exists = fs.existsSync(filePath);
  check(`SEO Data File: ${f}`, exists);
  if (exists) {
    const content = fs.readFileSync(filePath, 'utf8');
    check(`Valid TypeScript Export: ${f}`, content.includes('export const'));
  }
}

// 3. Verify Static SEO HTML Templates
console.log('\n--- 3. Static Pre-Render HTML Templates (SEO files/) ---');
const seoHtmlFiles = [
  'Home Page - SEO, AEO & GEO Setup File.html',
  'About Page - SEO Setup.html',
  'Contact Page - SEO Setup.html',
  'leadership.html',
  'Life at Cybaemtech - SEO Setup.html',
  'portfolio.html',
  'enterprise-software.html',
  'web-systems.html',
  'IT Agumentation - SEO Setup.html',
  'managed-it.html',
  'digital marketing.html',
  'it-infrastructure-services.html',
  'leadership-rohan-bhosale.html',
  'leadership-akshay-navle.html',
  'leadership-yash-bhalekar.html',
  'leadership-dilip-dsouza.html',
  'leadership-sanjay-mahadeo-bobde.html'
];

for (const h of seoHtmlFiles) {
  const filePath = path.join(seoFilesDir, h);
  const exists = fs.existsSync(filePath);
  check(`SEO HTML Template: ${h}`, exists);
  if (exists) {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasTitle = /<title>[\s\S]*?<\/title>/i.test(content);
    const hasDesc = /<meta[^>]*name=["']description["']/i.test(content);
    const hasCanonical = /<link[^>]*rel=["']canonical["']/i.test(content);
    const hasLdJson = /<script[^>]*type=["']application\/ld\+json["']/i.test(content);

    check(`Has <title>: ${h}`, hasTitle);
    check(`Has <meta description>: ${h}`, hasDesc);
    check(`Has canonical URL: ${h}`, hasCanonical);
    check(`Has JSON-LD Schema: ${h}`, hasLdJson);

    // Validate JSON validity
    const match = content.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
    if (match) {
      try {
        JSON.parse(match[1].trim());
        check(`Schema JSON Syntax Valid: ${h}`, true);
      } catch (e) {
        check(`Schema JSON Syntax Valid: ${h}`, false, e.message);
      }
    }
  }
}

// 4. Verify Built Dist Output
console.log('\n--- 4. Production Dist Prerender Verification ---');
const distDir = path.join(rootDir, 'dist');
if (fs.existsSync(distDir)) {
  const distIndex = path.join(distDir, 'index.html');
  check('dist/index.html Exists', fs.existsSync(distIndex));

  const sampleSubroutes = [
    'about/index.html',
    'contact/index.html',
    'leadership/index.html',
    'leadership/akshay-navle/index.html',
    'solutions/enterprise-software/index.html',
    'solutions/web-systems/index.html',
    'solutions/it-infrastructure-services/index.html'
  ];

  for (const sub of sampleSubroutes) {
    const subPath = path.join(distDir, sub);
    const exists = fs.existsSync(subPath);
    check(`Prerendered HTML generated: dist/${sub}`, exists);
    if (exists) {
      const content = fs.readFileSync(subPath, 'utf8');
      const hasSchema = content.includes('application/ld+json');
      check(`Contains Schema in Static HTML: dist/${sub}`, hasSchema);
    }
  }
}

console.log('\n====================================================');
console.log(`AUDIT RESULTS: ${passedChecks} / ${totalChecks} CHECKS PASSED`);
if (warnings.length === 0) {
  console.log('STATUS: ALL PAGES, SERVICES & SCHEMAS 100% VERIFIED & HEALTHY');
} else {
  console.log(`STATUS: ${warnings.length} WARNINGS FOUND:`);
  warnings.forEach(w => console.log(' - ' + w));
}
console.log('====================================================');
