const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  let html = fs.readFileSync('resume.html', 'utf8');

  html = html.replace(
    'Xcaliber Infotech (A Phoenix Group Company) — Data Scientist / AI-ML Engineer',
    'Xcaliber Infotech — Data Scientist / AI-ML Engineer'
  );

  fs.writeFileSync('resume.html', html);
  console.log('✓ Removed (A Phoenix Group Company) from Xcaliber job header');

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

  console.log(`Updated Header => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  await page.screenshot({ path: 'resume_screenshot_clean_xcaliber.png', fullPage: true });
  await browser.close();
})();
