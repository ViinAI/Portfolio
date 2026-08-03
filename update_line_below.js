const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  let rawHtml = fs.readFileSync('resume.html', 'utf8');

  // Replace boxed styling with a subtle, clean bottom line
  const lineUnderCss = `
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      margin-top: 5.5px;
      margin-bottom: 2.5px;
      font-size: 9.7pt;
      padding-bottom: 1.5px;
      border-bottom: 0.75px solid #9ca3af;
    }
  `;

  rawHtml = rawHtml.replace(/\.job-header\s*\{[\s\S]*?\}/, lineUnderCss);
  
  fs.writeFileSync('resume.html', rawHtml);
  fs.writeFileSync('cvs/resume.html', rawHtml);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  await page.goto('file:///' + path.resolve('resume.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.evaluate(async () => await document.fonts.ready);

  const metrics = await page.evaluate(() => {
    const pageEl = document.querySelector('.page');
    const eduEl = document.querySelector('section:last-of-type');
    return {
      pageHeight: pageEl.clientHeight,
      eduBottom: eduEl.offsetTop + eduEl.offsetHeight
    };
  });

  console.log(`Line Under Header => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
  });

  fs.writeFileSync('Vinay_Kumar_CV.pdf', pdfBuffer);
  fs.writeFileSync('cvs/Vinay_Kumar_CV.pdf', pdfBuffer);
  await page.screenshot({ path: 'resume_screenshot.png', fullPage: true });

  console.log('✓ Line below company header updated successfully!');
  await browser.close();
})();
