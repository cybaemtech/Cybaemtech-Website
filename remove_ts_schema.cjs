const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src', 'data', 'seo');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
for (const file of files) {
  const fullPath = path.join(dir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(/\{\s*"@context"\s*:\s*['"]https:\/\/schema\.org['"]\s*,\s*"@type"\s*:\s*['"]ProfessionalService['"][\s\S]*?\]\s*\},?\s*/g, '');
  
  // also check for without array
  content = content.replace(/\{\s*"@context"\s*:\s*['"]https:\/\/schema\.org['"]\s*,\s*"@type"\s*:\s*['"]ProfessionalService['"][\s\S]*?\}\s*,?\s*/g, '');

  fs.writeFileSync(fullPath, content);
}
