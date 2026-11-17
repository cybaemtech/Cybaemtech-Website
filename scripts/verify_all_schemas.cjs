const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const schemaDir = path.join(rootDir, 'schema');
const seoDataDir = path.join(rootDir, 'src/data/seo');
const seoFilesDir = path.join(rootDir, 'SEO files');

const checks = [
  {
    page: 'Home Page',
    route: '/',
    distFile: path.join(distDir, 'index.html'),
    schemaTxt: path.join(schemaDir, 'Home.txt'),
    seoTs: path.join(seoDataDir, 'homeSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'Home Page - SEO, AEO & GEO Setup File.html')
  },
  {
    page: 'About Page',
    route: '/about',
    distFile: path.join(distDir, 'about/index.html'),
    schemaTxt: path.join(schemaDir, 'about.txt'),
    seoTs: path.join(seoDataDir, 'aboutSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'About Page - SEO Setup.html')
  },
  {
    page: 'Contact Page',
    route: '/contact',
    distFile: path.join(distDir, 'contact/index.html'),
    schemaTxt: path.join(schemaDir, 'contact.txt'),
    seoTs: path.join(seoDataDir, 'contactSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'Contact Page - SEO Setup.html')
  },
  {
    page: 'Leadership Main Page',
    route: '/leadership',
    distFile: path.join(distDir, 'leadership/index.html'),
    schemaTxt: path.join(schemaDir, 'leadership.txt'),
    seoTs: path.join(seoDataDir, 'leadershipSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'leadership.html')
  },
  {
    page: 'Life at Cybaemtech',
    route: '/life-at-cybaemtech',
    distFile: path.join(distDir, 'life-at-cybaemtech/index.html'),
    schemaTxt: path.join(schemaDir, 'life at cybaemtech.txt'),
    seoTs: path.join(seoDataDir, 'lifeAtCybaemtechSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'Life at Cybaemtech - SEO Setup.html')
  },
  {
    page: 'Approach (Alias)',
    route: '/approach',
    distFile: path.join(distDir, 'approach/index.html'),
    schemaTxt: path.join(schemaDir, 'life at cybaemtech.txt'),
    seoTs: path.join(seoDataDir, 'approachSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'Life at Cybaemtech - SEO Setup.html')
  },
  {
    page: 'Portfolio Page',
    route: '/portfolio',
    distFile: path.join(distDir, 'portfolio/index.html'),
    schemaTxt: path.join(schemaDir, 'portfolio.txt'),
    seoTs: path.join(seoDataDir, 'portfolioSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'portfolio.html')
  },
  // Services
  {
    page: 'Service: Enterprise Software',
    route: '/solutions/enterprise-software',
    distFile: path.join(distDir, 'solutions/enterprise-software/index.html'),
    schemaTxt: path.join(schemaDir, 'Services/enterprise software.txt'),
    seoTs: path.join(seoDataDir, 'enterpriseSoftwareSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'enterprise-software.html')
  },
  {
    page: 'Service: Web Systems',
    route: '/solutions/web-systems',
    distFile: path.join(distDir, 'solutions/web-systems/index.html'),
    schemaTxt: path.join(schemaDir, 'Services/web systems.txt'),
    seoTs: path.join(seoDataDir, 'webSystemsSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'web-systems.html')
  },
  {
    page: 'Service: IT Staff Augmentation',
    route: '/solutions/it-staff-augmentation',
    distFile: path.join(distDir, 'solutions/it-staff-augmentation/index.html'),
    schemaTxt: path.join(schemaDir, 'Services/it staff augmentation.txt'),
    seoTs: path.join(seoDataDir, 'itStaffAugmentationSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'IT Agumentation - SEO Setup.html')
  },
  {
    page: 'Service: Managed IT & Cloud Security',
    route: '/solutions/managed-it-cloud-security',
    distFile: path.join(distDir, 'solutions/managed-it-cloud-security/index.html'),
    schemaTxt: path.join(schemaDir, 'Services/manage it.txt'),
    seoTs: path.join(seoDataDir, 'managedITSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'managed-it.html')
  },
  {
    page: 'Service: Digital Revenue & Growth',
    route: '/solutions/digital-revenue-growth',
    distFile: path.join(distDir, 'solutions/digital-revenue-growth/index.html'),
    schemaTxt: path.join(schemaDir, 'Services/digital revenue growth.txt'),
    seoTs: path.join(seoDataDir, 'digitalGrowthSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'digital marketing.html')
  },
  {
    page: 'Service: IT Infrastructure Services',
    route: '/solutions/it-infrastructure-services',
    distFile: path.join(distDir, 'solutions/it-infrastructure-services/index.html'),
    schemaTxt: path.join(schemaDir, 'Services/It infrastructure.txt'),
    seoTs: path.join(seoDataDir, 'itInfrastructureSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'it-infrastructure-services.html')
  },
  // Leadership Individual
  {
    page: 'Leader: Rohan Bhosale',
    route: '/leadership/rohan-bhosale',
    distFile: path.join(distDir, 'leadership/rohan-bhosale/index.html'),
    schemaTxt: path.join(schemaDir, 'Leadership/rohan bhosle.txt'),
    seoHtml: path.join(seoFilesDir, 'leadership-rohan-bhosale.html')
  },
  {
    page: 'Leader: Akshay Navle',
    route: '/leadership/akshay-navle',
    distFile: path.join(distDir, 'leadership/akshay-navle/index.html'),
    schemaTxt: path.join(schemaDir, 'Leadership/akshay navle.txt'),
    seoHtml: path.join(seoFilesDir, 'leadership-akshay-navle.html')
  },
  {
    page: 'Leader: Yash Bhalekar',
    route: '/leadership/yash-bhalekar',
    distFile: path.join(distDir, 'leadership/yash-bhalekar/index.html'),
    schemaTxt: path.join(schemaDir, 'Leadership/yash bhalekar.txt'),
    seoHtml: path.join(seoFilesDir, 'leadership-yash-bhalekar.html')
  },
  {
    page: 'Leader: Dilip D\'Souza',
    route: '/leadership/dilip-dsouza',
    distFile: path.join(distDir, 'leadership/dilip-dsouza/index.html'),
    schemaTxt: path.join(schemaDir, 'Leadership/dilip dsouza.txt'),
    seoHtml: path.join(seoFilesDir, 'leadership-dilip-dsouza.html')
  },
  {
    page: 'Leader: Mr. Sanjay Mahadeo Bobde',
    route: '/leadership/mr.-sanjay-mahadeo-bobde',
    distFile: path.join(distDir, 'leadership/mr.-sanjay-mahadeo-bobde/index.html'),
    schemaTxt: path.join(schemaDir, 'Leadership/sanjay mahadeo bobde.txt'),
    seoHtml: path.join(seoFilesDir, 'leadership-sanjay-mahadeo-bobde.html')
  }
];

console.log('='.repeat(70));
console.log('COMPLETE SCHEMA VALIDATION AUDIT ACROSS ALL SECTIONS & PAGES');
console.log('='.repeat(70));

let passCount = 0;
let failCount = 0;

for (const c of checks) {
  console.log(`\n▶ Checking [${c.page}] (${c.route})`);

  // 1. Check Source Schema txt
  if (!fs.existsSync(c.schemaTxt)) {
    console.error(`  ❌ Missing Source txt: ${c.schemaTxt}`);
    failCount++;
    continue;
  }
  const txtContent = fs.readFileSync(c.schemaTxt, 'utf8');
  const txtMatch = txtContent.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
  if (!txtMatch) {
    console.error(`  ❌ Invalid script tag in txt`);
    failCount++;
    continue;
  }
  let sourceParsed;
  try {
    sourceParsed = JSON.parse(txtMatch[1].trim());
    const entityCount = sourceParsed['@graph'] ? sourceParsed['@graph'].length : 1;
    console.log(`  ✓ Source Schema Valid JSON-LD: ${entityCount} entity/entities`);
  } catch (e) {
    console.error(`  ❌ Source Schema JSON syntax error: ${e.message}`);
    failCount++;
    continue;
  }

  // 2. Check SEO files HTML template
  if (c.seoHtml) {
    if (!fs.existsSync(c.seoHtml)) {
      console.error(`  ❌ Missing HTML template: ${c.seoHtml}`);
      failCount++;
    } else {
      const htmlContent = fs.readFileSync(c.seoHtml, 'utf8');
      const htmlMatch = htmlContent.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
      if (htmlMatch) {
        try {
          JSON.parse(htmlMatch[1].trim());
          console.log(`  ✓ SEO HTML Template contains valid JSON-LD`);
        } catch (e) {
          console.error(`  ❌ SEO HTML JSON parse error: ${e.message}`);
          failCount++;
        }
      } else {
        console.error(`  ❌ Missing JSON-LD script in SEO HTML template`);
        failCount++;
      }
    }
  }

  // 3. Check Built Dist HTML
  if (fs.existsSync(c.distFile)) {
    const distContent = fs.readFileSync(c.distFile, 'utf8');
    const distMatches = distContent.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
    if (distMatches && distMatches.length > 0) {
      let allValid = true;
      for (const m of distMatches) {
        const raw = m.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
        try {
          const parsed = JSON.parse(raw);
          const typeDesc = parsed['@type'] || (parsed['@graph'] ? `@graph (${parsed['@graph'].length} items)` : 'Object');
          // Passed
        } catch(e) {
          allValid = false;
          console.error(`  ❌ Built Dist HTML has invalid JSON: ${e.message}`);
        }
      }
      if (allValid) {
        console.log(`  ✓ Production Dist HTML (${path.basename(path.dirname(c.distFile)) + '/' + path.basename(c.distFile)}) has valid pre-rendered Schema!`);
        passCount++;
      } else {
        failCount++;
      }
    } else {
      console.error(`  ❌ Production Dist HTML is missing pre-rendered schema!`);
      failCount++;
    }
  } else {
    console.warn(`  ⚠️ Dist file not yet built: ${c.distFile}`);
  }
}

console.log('\n' + '='.repeat(70));
console.log(`AUDIT RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log('='.repeat(70));
