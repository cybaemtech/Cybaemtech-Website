const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'SEO files');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
for(const file of files) {
  const fullPath = path.join(dir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(/<script type="application\/ld\+json">\s*\{[\s\S]*?"@type"\s*:\s*"ProfessionalService"[\s\S]*?\}[\s]*<\/script>/gi, '');
  fs.writeFileSync(fullPath, content);
}
