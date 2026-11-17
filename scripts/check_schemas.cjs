const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '../../../../../c:/Cybaemtech/Cybaemtech/Cybaemtech/IN HOUSE/Cybaemtech 23sep') || process.cwd();
const schemaDir = path.resolve('schema');

console.log('Schema Dir:', schemaDir);

function scan(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (f.endsWith('.txt')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
      console.log(full.replace(process.cwd(), ''), '->', matches ? matches.length + ' scripts' : 'NO SCRIPTS');
      if (matches) {
        matches.forEach((m, idx) => {
          const jsonStr = m.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
          try {
            const parsed = JSON.parse(jsonStr);
            console.log('   [' + idx + '] type:', parsed['@type'] || (parsed['@graph'] ? '@graph (' + parsed['@graph'].length + ')' : 'unknown'));
          } catch (e) {
            console.error('   [' + idx + '] JSON PARSE ERROR:', e.message);
          }
        });
      }
    }
  }
}

scan(schemaDir);
