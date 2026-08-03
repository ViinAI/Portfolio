const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  let html = fs.readFileSync('resume.html', 'utf8');

  // Increase margin-top for company-block-sep by 1 full line height (from 7px to 14px)
  html = html.replace(
    /margin-top:\s*7px;/,
    'margin-top: 14px;'
  );

  // Slightly adjust vertical padding to 4.5mm to give plenty of room for the extra line
  html = html.replace('padding: 5.5mm 12mm;', 'padding: 4.5mm 12mm;');
  html = html.replace('padding: 5.5mm 10mm;', 'padding: 4.5mm 10mm;');

  fs.writeFileSync('resume.html', html);
  console.log('✓ Added 1 full additional empty line above Xcaliber and Concentrix');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  await page.goto('http://localhost:3000/resume.html', { waitUntil: 'networkidle' });
  await page.evaluate(async () => await document.fonts.ready);

  const metrics = await page.evaluate(() => {
    const pageEl = document.querySelector('.page');
    const eduEl = document.querySelector('section:last-of-type');
    return {
      pageHeight: pageEl.clientHeight,
      eduBottom: eduEl.offsetTop + eduEl.offsetHeight
    };
  });

  console.log(`Extra Line Above Companies => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  await page.screenshot({ path: 'resume_screenshot_extra_line.png', fullPage: true });
  await browser.close();
})();
