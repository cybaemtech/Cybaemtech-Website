const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const schemaDir = path.join(rootDir, 'schema');
const seoFilesDir = path.join(rootDir, 'SEO files');

const leaderConfigs = [
  {
    slug: 'rohan-bhosale',
    file: 'Leadership/rohan bhosle.txt',
    title: 'Rohan Bhosale - Founder & Chief Executive Officer | Cybaem Tech',
    description: 'Rohan Bhosale founded Cybaem Tech with a vision of creating a technology company that delivers practical, scalable, and business-focused IT solutions.',
    canonical: 'https://www.cybaemtech.com/leadership/rohan-bhosale',
    htmlName: 'leadership-rohan-bhosale.html'
  },
  {
    slug: 'akshay-navle',
    file: 'Leadership/akshay navle.txt',
    title: 'Akshay Navle - Chief Technology & Product Officer | Cybaem Tech',
    description: 'Akshay Navle is Chief Technology & Product Officer at Cybaem Tech, leading enterprise technology, AI-driven product innovation, and large-scale digital transformation initiatives.',
    canonical: 'https://www.cybaemtech.com/leadership/akshay-navle',
    htmlName: 'leadership-akshay-navle.html'
  },
  {
    slug: 'yash-bhalekar',
    file: 'Leadership/yash bhalekar.txt',
    title: 'Yash Bhalekar - Director Operations & Business Strategy | Cybaem Tech',
    description: 'Yash Bhalekar plays a pivotal role in driving operational excellence and strategic business initiatives across Cybaem Tech.',
    canonical: 'https://www.cybaemtech.com/leadership/yash-bhalekar',
    htmlName: 'leadership-yash-bhalekar.html'
  },
  {
    slug: 'dilip-dsouza',
    file: 'Leadership/dilip dsouza.txt',
    title: "Dilip D'Souza - Director Global Business Relations | Cybaem Tech",
    description: "Dilip D'Souza leads Cybaem Tech's global business development and strategic partnership initiatives across key international markets.",
    canonical: 'https://www.cybaemtech.com/leadership/dilip-dsouza',
    htmlName: 'leadership-dilip-dsouza.html'
  },
  {
    slug: 'sanjay-mahadeo-bobde',
    file: 'Leadership/sanjay mahadeo bobde.txt',
    title: 'Mr. Sanjay Mahadeo Bobde - Senior Executive Advisor | Cybaem Tech',
    description: 'Mr. Sanjay Mahadeo Bobde brings deep enterprise and public-sector governance expertise to Cybaem Tech.',
    canonical: 'https://www.cybaemtech.com/leadership/sanjay-mahadeo-bobde',
    htmlName: 'leadership-sanjay-mahadeo-bobde.html'
  }
];

for (const leader of leaderConfigs) {
  const schemaPath = path.join(schemaDir, leader.file);
  if (fs.existsSync(schemaPath)) {
    const rawSchema = fs.readFileSync(schemaPath, 'utf8').trim();
    const html = `<!-- =======================================================
${leader.title.toUpperCase()} SEO SETUP
======================================================= -->

<title>${leader.title}</title>
<meta name="description" content="${leader.description}" />
<link rel="canonical" href="${leader.canonical}" />
<meta property="og:title" content="${leader.title}" />
<meta property="og:description" content="${leader.description}" />
<meta property="og:url" content="${leader.canonical}" />
<meta property="og:type" content="profile" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${leader.title}" />
<meta name="twitter:description" content="${leader.description}" />

${rawSchema}
`;
    fs.writeFileSync(path.join(seoFilesDir, leader.htmlName), html, 'utf8');
    console.log(`✓ Created SEO template for ${leader.slug}: ${leader.htmlName}`);
  }
}
