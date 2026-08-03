const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  let html = fs.readFileSync('resume.html', 'utf8');

  // Increase separation above and below Xcaliber and Concentrix
  html = html.replace(
    /\.company-block-sep\s*\{[\s\S]*?\}/,
    `.company-block-sep {
      margin-top: 18px;
      margin-bottom: 6px;
    }`
  );

  // Also give the job header a tiny bit more presence
  html = html.replace(
    /\.job-header\s*\{[\s\S]*?\}/,
    `.job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      margin-top: 2px;
      margin-bottom: 3px;
      font-size: 10.4pt;
    }`
  );

  fs.writeFileSync('resume.html', html);
  console.log('✓ Increased spacing above and below Xcaliber & Concentrix');

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

  console.log(`Increased Org Spacing => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  await page.screenshot({ path: 'resume_screenshot_distinct_orgs.png', fullPage: true });
  await browser.close();
})();
