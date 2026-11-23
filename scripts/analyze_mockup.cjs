const puppeteer = require('puppeteer');
const path = require('path');

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 576 });
  const imgPath = 'file:///' + path.resolve('C:/Users/Ganesh.Kale/.gemini/antigravity/brain/d9741b8b-28c0-43ee-bcc1-6b789d20c6bd/.user_uploaded/media_1794994528964_8b8dc9f5.jpg').replace(/\\/g, '/');
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background:#000;">
      <canvas id="c" width="1024" height="576"></canvas>
      <script>
        const img = new Image();
        img.src = "${imgPath}";
        img.onload = () => {
          const ctx = document.getElementById('c').getContext('2d');
          ctx.drawImage(img, 0, 0);
          window.__loaded = true;
        };
      </script>
    </body>
    </html>
  `);

  await page.waitForFunction('window.__loaded === true');

  // Let's sample colors and coordinates of the hexagons
  const data = await page.evaluate(() => {
    const ctx = document.getElementById('c').getContext('2d');
    // Let's inspect the center hexagon around x=512
    // Search vertically for bright cyan border around x=512
    let topY = null;
    let bottomY = null;
    for (let y = 250; y < 500; y++) {
      const p = ctx.getImageData(512, y, 1, 1).data;
      // cyan color: high G and B, lower R (e.g. R < 150, G > 180, B > 200)
      if (p[1] > 180 && p[2] > 200 && p[0] < 150) {
        if (topY === null) topY = y;
        bottomY = y;
      }
    }
    return { topY, bottomY };
  });

  console.log('Center hexagon cyan pixels vertical range at x=512:', data);
  await browser.close();
}
run();
