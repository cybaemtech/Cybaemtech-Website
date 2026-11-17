const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'dist') files = files.concat(walk(full));
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(path.resolve(__dirname, '../src'));
const oldPaths = [
  '/managed-it',
  '/managed-it-cloud-security',
  '/it-staff-augmentation',
  '/it-infrastructure',
  '/digital-marketing',
  '/solutions/digital-revenue-growth'
];

let totalHits = 0;
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  for (const p of oldPaths) {
    // Check if path is used in quotes without /solutions/ prefix (or exact match)
    const quoteMatches = content.match(new RegExp(`["']${p}["']`, 'g'));
    if (quoteMatches) {
      console.log(`Found ${quoteMatches.length} match(es) for "${p}" in ${path.relative(path.resolve(__dirname, '..'), f)}`);
      totalHits += quoteMatches.length;
    }
  }
}

console.log(`\nAudit finished. Total occurrences of deprecated target paths: ${totalHits}`);
