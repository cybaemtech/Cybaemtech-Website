const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const seoDataDir = path.join(rootDir, 'src/data/seo');

const filesToExport = [
  { name: 'homeSeoData', file: 'homeSeo.ts' },
  { name: 'aboutSeoData', file: 'aboutSeo.ts' },
  { name: 'contactSeoData', file: 'contactSeo.ts' },
  { name: 'lifeAtCybaemtechSeoData', file: 'lifeAtCybaemtechSeo.ts' },
  { name: 'leadershipSeoData', file: 'leadershipSeo.ts' },
  { name: 'portfolioSeoData', file: 'portfolioSeo.ts' },
  { name: 'enterpriseSoftwareSeoData', file: 'enterpriseSoftwareSeo.ts' },
  { name: 'webSystemsSeoData', file: 'webSystemsSeo.ts' },
  { name: 'itStaffAugmentationSeoData', file: 'itStaffAugmentationSeo.ts' },
  { name: 'itAugmentationSeoData', file: 'itStaffAugmentationSeo.ts' },
  { name: 'managedITSeoData', file: 'managedITSeo.ts' },
  { name: 'digitalGrowthSeoData', file: 'digitalGrowthSeo.ts' },
  { name: 'digitalMarketingSeoData', file: 'digitalGrowthSeo.ts' },
  { name: 'itInfrastructureSeoData', file: 'itInfrastructureSeo.ts' },
  { name: 'itInfrastructureServicesSeoData', file: 'itInfrastructureSeo.ts' },
  { name: 'blogSeoData', file: 'blogSeo.ts' }
];

let exportStatements = [];
for (const item of filesToExport) {
  const filePath = path.join(seoDataDir, item.file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Extract export const dataName = { ... };
    const match = content.match(/export\s+const\s+(\w+)\s*=\s*(\{[\s\S]*?\n\};)/);
    if (match) {
      exportStatements.push(`export const ${item.name} = ${match[2].replace(/;$/, '')};\n`);
    } else {
      // Direct re-export
      exportStatements.push(`export { ${item.name} } from "./src/data/seo/${item.file.replace('.ts', '')}";\n`);
    }
  }
}

const seoConfigContent = `// ---------------------------------------------------------------------------
// SEO Config — used exclusively by vite.config.ts for dev-time HTML injection.
// ---------------------------------------------------------------------------

${exportStatements.join('\n')}
`;

fs.writeFileSync(path.join(rootDir, 'seo-config.ts'), seoConfigContent, 'utf8');
console.log('✓ seo-config.ts synced successfully');

// Update index.html injection block with Home Page SEO & new Schema
const homeSeoHtmlPath = path.join(rootDir, 'SEO files/Home Page - SEO, AEO & GEO Setup File.html');
const indexHtmlPath = path.join(rootDir, 'index.html');

if (fs.existsSync(homeSeoHtmlPath) && fs.existsSync(indexHtmlPath)) {
  const homeHtml = fs.readFileSync(homeSeoHtmlPath, 'utf8');
  let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  const startMarker = '<!-- SEO_INJECT_START -->';
  const endMarker = '<!-- SEO_INJECT_END -->';

  const startIndex = indexHtml.indexOf(startMarker);
  const endIndex = indexHtml.indexOf(endMarker);

  if (startIndex !== -1 && endIndex !== -1) {
    const newBlock = `${startMarker}\n  <!-- SEO SOURCE: src/data/seo/homeSeo.ts -->\n${homeHtml.trim()}\n  ${endMarker}`;
    indexHtml = indexHtml.substring(0, startIndex) + newBlock + indexHtml.substring(endIndex + endMarker.length);
    fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
    console.log('✓ index.html SEO block updated successfully');
  }
}
