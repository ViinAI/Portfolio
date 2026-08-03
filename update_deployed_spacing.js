const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  let html = fs.readFileSync('resume.html', 'utf8');

  // 1. Remove line under company header
  html = html.replace(
    /border-bottom:\s*0\.75px\s*solid\s*#9ca3af;/,
    '/* border-bottom removed */'
  );
  html = html.replace(
    /padding-bottom:\s*1\.5px;/,
    'padding-bottom: 0px;'
  );

  // 2. Adjust company spacing (clean empty line above and below Xcaliber and Concentrix)
  html = html.replace(
    /\.company-block\s*\{\s*margin-bottom:\s*2px;\s*\}/,
    `.company-block { margin-bottom: 0px; }
    .company-block-sep {
      margin-top: 7px;
      margin-bottom: 2px;
    }`
  );

  fs.writeFileSync('resume.html', html);
  console.log('✓ Updated deployed resume.html with vertical spacing and removed lines');

  // Verify measurement in browser
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

  console.log(`Deployed Spacing => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  await page.screenshot({ path: 'resume_screenshot_spacing.png', fullPage: true });
  await browser.close();
})();
