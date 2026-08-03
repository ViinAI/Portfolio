const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  let rawHtml = fs.readFileSync('resume.html', 'utf8');

  // Remove the previous inline underline on text
  rawHtml = rawHtml.replace(/<span style="text-decoration: underline; font-weight: 700;">(.*?)<\/span>/g, '$1');

  // Let's test a clean, elegant boxed job-header
  const boxedCss = `
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      margin-top: 5px;
      margin-bottom: 2.5px;
      font-size: 9.7pt;
      padding: 2px 6px;
      border: 1px solid #333;
      background: #fafafa;
      border-radius: 2px;
    }
  `;

  let testHtml = rawHtml.replace(/\.job-header\s*\{[\s\S]*?\}/, boxedCss);
  fs.writeFileSync('resume_boxed.html', testHtml);

  await page.goto('file:///' + path.resolve('resume_boxed.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.evaluate(async () => await document.fonts.ready);

  const metrics = await page.evaluate(() => {
    const pageEl = document.querySelector('.page');
    const eduEl = document.querySelector('section:last-of-type');
    return {
      pageHeight: pageEl.clientHeight,
      eduBottom: eduEl.offsetTop + eduEl.offsetHeight
    };
  });

  console.log(`Boxed Header => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  await page.screenshot({ path: 'resume_screenshot_boxed.png', fullPage: true });

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
  });
  fs.writeFileSync('Vinay_Kumar_CV_boxed.pdf', pdfBuffer);

  await browser.close();
})();
