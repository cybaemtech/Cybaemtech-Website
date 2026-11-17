const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const schemaDir = path.join(rootDir, 'schema');
const seoDataDir = path.join(rootDir, 'src/data/seo');
const seoFilesDir = path.join(rootDir, 'SEO files');

// Helper to extract JSON-LD script string from txt file
function extractJsonLdScript(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
  if (!match) {
    throw new Error(`No JSON-LD script found in ${filePath}`);
  }
  const rawJson = match[1].trim();
  const parsed = JSON.parse(rawJson);
  return {
    rawScript: `<script type="application/ld+json">\n${JSON.stringify(parsed, null, 2)}\n</script>`,
    parsedObj: parsed
  };
}

// Map files
const pageMappings = [
  {
    name: 'Home',
    schemaTxt: path.join(schemaDir, 'Home.txt'),
    seoTs: path.join(seoDataDir, 'homeSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'Home Page - SEO, AEO & GEO Setup File.html'),
    exportName: 'homeSeoData'
  },
  {
    name: 'About',
    schemaTxt: path.join(schemaDir, 'about.txt'),
    seoTs: path.join(seoDataDir, 'aboutSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'About Page - SEO Setup.html'),
    exportName: 'aboutSeoData'
  },
  {
    name: 'Contact',
    schemaTxt: path.join(schemaDir, 'contact.txt'),
    seoTs: path.join(seoDataDir, 'contactSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'Contact Page - SEO Setup.html'),
    exportName: 'contactSeoData'
  },
  {
    name: 'Leadership Main',
    schemaTxt: path.join(schemaDir, 'leadership.txt'),
    seoTs: path.join(seoDataDir, 'leadershipSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'leadership.html'),
    exportName: 'leadershipSeoData'
  },
  {
    name: 'Life at Cybaemtech',
    schemaTxt: path.join(schemaDir, 'life at cybaemtech.txt'),
    seoTs: path.join(seoDataDir, 'lifeAtCybaemtechSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'Life at Cybaemtech - SEO Setup.html'),
    exportName: 'lifeAtCybaemtechSeoData'
  },
  {
    name: 'Portfolio',
    schemaTxt: path.join(schemaDir, 'portfolio.txt'),
    seoTs: path.join(seoDataDir, 'portfolioSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'portfolio.html'),
    exportName: 'portfolioSeoData'
  },
  {
    name: 'Enterprise Software',
    schemaTxt: path.join(schemaDir, 'Services/enterprise software.txt'),
    seoTs: path.join(seoDataDir, 'enterpriseSoftwareSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'enterprise-software.html'),
    exportName: 'enterpriseSoftwareSeoData',
    solutionKey: 'enterprise-software'
  },
  {
    name: 'Web Systems',
    schemaTxt: path.join(schemaDir, 'Services/web systems.txt'),
    seoTs: path.join(seoDataDir, 'webSystemsSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'web-systems.html'),
    exportName: 'webSystemsSeoData',
    solutionKey: 'web-systems'
  },
  {
    name: 'IT Staff Augmentation',
    schemaTxt: path.join(schemaDir, 'Services/it staff augmentation.txt'),
    seoTs: path.join(seoDataDir, 'itStaffAugmentationSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'IT Agumentation - SEO Setup.html'),
    exportName: 'itStaffAugmentationSeoData',
    solutionKey: 'it-staff-augmentation'
  },
  {
    name: 'Managed IT',
    schemaTxt: path.join(schemaDir, 'Services/manage it.txt'),
    seoTs: path.join(seoDataDir, 'managedITSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'managed-it.html'),
    exportName: 'managedITSeoData',
    solutionKey: 'managed-it'
  },
  {
    name: 'Digital Growth',
    schemaTxt: path.join(schemaDir, 'Services/digital revenue growth.txt'),
    seoTs: path.join(seoDataDir, 'digitalGrowthSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'digital marketing.html'),
    exportName: 'digitalGrowthSeoData',
    solutionKey: 'digital-revenue-growth'
  },
  {
    name: 'IT Infrastructure',
    schemaTxt: path.join(schemaDir, 'Services/It infrastructure.txt'),
    seoTs: path.join(seoDataDir, 'itInfrastructureSeo.ts'),
    seoHtml: path.join(seoFilesDir, 'it-infrastructure-services.html'),
    exportName: 'itInfrastructureSeoData',
    solutionKey: 'it-infrastructure-services'
  }
];

// Process each page
for (const item of pageMappings) {
  console.log(`Processing: ${item.name}...`);
  const { rawScript, parsedObj } = extractJsonLdScript(item.schemaTxt);

  // 1. Update TS file in src/data/seo
  if (fs.existsSync(item.seoTs)) {
    let tsContent = fs.readFileSync(item.seoTs, 'utf8');

    // Extract meta fields if present
    const titleMatch = tsContent.match(/title:\s*["'`]([\s\S]*?)["'`]/);
    const descMatch = tsContent.match(/description:\s*["'`]([\s\S]*?)["'`]/);
    const canonMatch = tsContent.match(/canonical:\s*["'`]([\s\S]*?)["'`]/);
    const keywMatch = tsContent.match(/keywords:\s*["'`]([\s\S]*?)["'`]/);
    const ogTitleMatch = tsContent.match(/ogTitle:\s*["'`]([\s\S]*?)["'`]/);
    const ogDescMatch = tsContent.match(/ogDescription:\s*["'`]([\s\S]*?)["'`]/);
    const twTitleMatch = tsContent.match(/twitterTitle:\s*["'`]([\s\S]*?)["'`]/);
    const twDescMatch = tsContent.match(/twitterDescription:\s*["'`]([\s\S]*?)["'`]/);

    const title = titleMatch ? titleMatch[1] : '';
    const desc = descMatch ? descMatch[1] : '';
    const canon = canonMatch ? canonMatch[1] : '';
    const keyw = keywMatch ? keywMatch[1] : '';
    const ogTitle = ogTitleMatch ? ogTitleMatch[1] : '';
    const ogDesc = ogDescMatch ? ogDescMatch[1] : '';
    const twTitle = twTitleMatch ? twTitleMatch[1] : '';
    const twDesc = twDescMatch ? twDescMatch[1] : '';

    // If parsedObj has @graph, we can assign it as an array of objects
    const jsonLdData = parsedObj['@graph'] ? parsedObj['@graph'] : (Array.isArray(parsedObj) ? parsedObj : [parsedObj]);

    const newTsContent = `export const ${item.exportName} = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(desc)},
  canonical: ${JSON.stringify(canon)},
  keywords: ${JSON.stringify(keyw)},
  ogTitle: ${JSON.stringify(ogTitle)},
  ogDescription: ${JSON.stringify(ogDesc)},
  twitterTitle: ${JSON.stringify(twTitle)},
  twitterDescription: ${JSON.stringify(twDesc)},
  jsonLd: ${JSON.stringify(jsonLdData, null, 2)}
};
`;
    fs.writeFileSync(item.seoTs, newTsContent, 'utf8');
    console.log(`  ✓ Updated ${path.basename(item.seoTs)}`);
  }

  // 2. Update HTML template in SEO files
  if (fs.existsSync(item.seoHtml)) {
    let htmlContent = fs.readFileSync(item.seoHtml, 'utf8');
    // Replace all existing <script type="application/ld+json">...</script>
    const scriptRegex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi;
    if (scriptRegex.test(htmlContent)) {
      htmlContent = htmlContent.replace(scriptRegex, '');
    }
    // Clean trailing spaces and append new rawScript
    htmlContent = htmlContent.trim() + '\n\n' + rawScript + '\n';
    fs.writeFileSync(item.seoHtml, htmlContent, 'utf8');
    console.log(`  ✓ Updated ${path.basename(item.seoHtml)}`);
  }
}

// 3. Process Leadership Profiles
const leaderFiles = [
  { slug: 'akshay-navle', file: 'akshay navle.txt', name: 'Akshay Navle' },
  { slug: 'dilip-dsouza', file: 'dilip dsouza.txt', name: "Dilip D'Souza" },
  { slug: 'rohan-bhosale', file: 'rohan bhosle.txt', name: 'Rohan Bhosale' },
  { slug: 'sanjay-mahadeo-bobde', file: 'sanjay mahadeo bobde.txt', name: 'Mr. Sanjay Mahadeo Bobde' },
  { slug: 'mr.-sanjay-mahadeo-bobde', file: 'sanjay mahadeo bobde.txt', name: 'Mr. Sanjay Mahadeo Bobde' },
  { slug: 'yash-bhalekar', file: 'yash bhalekar.txt', name: 'Yash Bhalekar' }
];

const leaderSchemas = {};
for (const l of leaderFiles) {
  const filePath = path.join(schemaDir, 'Leadership', l.file);
  if (fs.existsSync(filePath)) {
    const { parsedObj } = extractJsonLdScript(filePath);
    const jsonLdData = parsedObj['@graph'] ? parsedObj['@graph'] : (Array.isArray(parsedObj) ? parsedObj : [parsedObj]);
    leaderSchemas[l.slug] = jsonLdData;
    console.log(`  ✓ Loaded Leadership Schema for ${l.name} (${l.slug})`);
  }
}

const leaderProfilesSeoContent = `// Leadership Profiles Schema Mapping
export const leaderProfilesJsonLd: Record<string, unknown[]> = ${JSON.stringify(leaderSchemas, null, 2)};
`;

fs.writeFileSync(path.join(seoDataDir, 'leaderProfilesSeo.ts'), leaderProfilesSeoContent, 'utf8');
console.log('✓ Created leaderProfilesSeo.ts');

console.log('All schemas parsed & applied successfully!');
