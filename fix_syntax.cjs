const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src', 'data', 'seo');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
for(const file of files) {
  const fullPath = path.join(dir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  let before = content;
  content = content.replace(/\},\s*\},\s*\{/g, '},\n    {');
  content = content.replace(/\},\s*\}\s*\]/g, '}\n  ]');
  if(before !== content) {
    fs.writeFileSync(fullPath, content);
  }
}
