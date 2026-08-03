const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  let html = fs.readFileSync('resume.html', 'utf8');

  // Add underline styling to company names
  html = html.replace(
    '<span>Infosys — Senior AI Engineer</span>',
    '<span><span style="text-decoration: underline; font-weight: 700;">Infosys</span> — Senior AI Engineer</span>'
  );
  html = html.replace(
    '<span>Xcaliber Infotech (A Phoenix Group Company) — Data Scientist / AI-ML Engineer</span>',
    '<span><span style="text-decoration: underline; font-weight: 700;">Xcaliber Infotech</span> (A Phoenix Group Company) — Data Scientist / AI-ML Engineer</span>'
  );
  html = html.replace(
    '<span>Concentrix India — Data Analyst</span>',
    '<span><span style="text-decoration: underline; font-weight: 700;">Concentrix India</span> — Data Analyst</span>'
  );

  fs.writeFileSync('resume.html', html);
  fs.writeFileSync('cvs/resume.html', html);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  await page.goto('file:///' + path.resolve('resume.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });
  await page.evaluate(async () => await document.fonts.ready);

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    pageRanges: '1',
    margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
  });

  fs.writeFileSync('Vinay_Kumar_CV.pdf', pdfBuffer);
  fs.writeFileSync('cvs/Vinay_Kumar_CV.pdf', pdfBuffer);
  await page.screenshot({ path: 'resume_screenshot.png', fullPage: true });

  console.log('✓ Company underline added to resume.html and PDF!');
  await browser.close();
})();
