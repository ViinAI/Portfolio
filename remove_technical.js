const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  let html = fs.readFileSync('resume.html', 'utf8');

  // 1. Remove the Technical subsection from Infosys
  html = html.replace(
    /\s*<div class="sub-heading">Technical<\/div>\s*<ul>\s*<li><strong>LLM Compiler:<\/strong> Built a proprietary LLM execution optimizer with dynamic prompt planning and semantic caching, reducing median query latency by 35%\.<\/li>\s*<\/ul>/,
    ''
  );

  // 2. Adjust padding and vertical spacing gracefully with the freed-up space
  html = html.replace('padding: 4.5mm 12mm;', 'padding: 7mm 12mm;');
  html = html.replace('padding: 4.5mm 10mm;', 'padding: 7mm 10mm;');
  html = html.replace(/section\s*\{\s*margin-bottom:\s*4px;/, 'section { margin-bottom: 6px;');

  fs.writeFileSync('resume.html', html);
  console.log('✓ Removed Technical subsection from Infosys and balanced vertical padding');

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

  console.log(`After Removing Technical => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  await page.screenshot({ path: 'resume_screenshot_no_technical.png', fullPage: true });
  await browser.close();
})();
