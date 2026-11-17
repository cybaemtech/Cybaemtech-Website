const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') {
        files = files.concat(walk(full));
      }
    } else if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(path.resolve(__dirname, '../src'));
const allLinks = new Map();

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  // Match to="..." or href="..." or navigate("...")
  const regex = /(?:to|href|navigate)\s*(?:=|\()\s*['"](\/[^'"#? ]*)['"]/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const target = m[1];
    if (target.startsWith('//')) continue;
    if (!allLinks.has(target)) allLinks.set(target, []);
    allLinks.get(target).push(path.relative(path.resolve(__dirname, '..'), f));
  }
}

console.log('=== ALL FOUND INTERNAL NAVIGATION TARGETS IN SRC/ ===');
for (const [link, sources] of Array.from(allLinks.entries()).sort()) {
  console.log(`${link.padEnd(45)} -> ${sources.length} occurrences (e.g., ${sources[0]})`);
}
