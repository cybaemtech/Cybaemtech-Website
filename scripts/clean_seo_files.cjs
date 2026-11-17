const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const seoFilesDir = path.join(rootDir, 'SEO files');

const files = fs.readdirSync(seoFilesDir);
for (const file of files) {
  if (file.endsWith('.html')) {
    const fullPath = path.join(seoFilesDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    // Remove markdown code fences
    content = content.replace(/```html/gi, '').replace(/```/g, '').trim();
    fs.writeFileSync(fullPath, content + '\n', 'utf8');
    console.log(`✓ Cleaned fences in ${file}`);
  }
}
