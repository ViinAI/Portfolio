const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  
  const tests = [
    {
      name: "Tuned A (9.6pt, 1.28 line-height, 7.5mm pad, 6px secMargin)",
      fontSize: "9.6pt",
      lineHeight: "1.28",
      padV: "7.5mm",
      secMargin: "6px",
      liMargin: "2.2px",
      summaryMb: "5px",
      jobMt: "5px"
    },
    {
      name: "Tuned B (9.65pt, 1.28 line-height, 8mm pad, 6px secMargin)",
      fontSize: "9.65pt",
      lineHeight: "1.28",
      padV: "8mm",
      secMargin: "6px",
      liMargin: "2.4px",
      summaryMb: "5px",
      jobMt: "5.5px"
    },
    {
      name: "Tuned C (9.7pt, 1.285 line-height, 8mm pad, 6.5px secMargin)",
      fontSize: "9.7pt",
      lineHeight: "1.285",
      padV: "8mm",
      secMargin: "6.5px",
      liMargin: "2.5px",
      summaryMb: "5.5px",
      jobMt: "5.5px"
    }
  ];

  let rawHtml = fs.readFileSync('resume.html', 'utf8');

  for (let t of tests) {
    let css = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #f4f4f6;
      font-family: "EB Garamond", "Times New Roman", Times, serif;
      color: #111;
      line-height: ${t.lineHeight};
      font-size: ${t.fontSize};
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .actions-bar {
      margin-bottom: 10px;
      display: flex;
      gap: 10px;
    }
    .btn {
      padding: 7px 14px;
      font-family: system-ui, sans-serif;
      font-size: 13px;
      font-weight: 500;
      background: #0066cc;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .btn:hover { background: #0052a3; }
    .page {
      background: #fff;
      width: 210mm;
      min-height: 297mm;
      padding: ${t.padV} 12mm;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      page-break-inside: avoid;
    }
    header { text-align: center; margin-bottom: 6px; }
    h1 { font-size: 22pt; font-weight: 700; letter-spacing: -0.3px; margin-bottom: 1px; }
    .subtitle { font-size: 11.4pt; font-weight: 600; color: #222; margin-bottom: 2px; }
    .contact-line { font-size: 9.4pt; color: #333; }
    .contact-line a { color: #0000ee; text-decoration: underline; }
    .divider { margin: 0 4px; }
    section { margin-bottom: ${t.secMargin}; page-break-inside: avoid; }
    h2 {
      font-size: 10.6pt;
      font-weight: 700;
      border-bottom: 1px solid #111;
      padding-bottom: 1.5px;
      margin-bottom: 3.5px;
    }
    .summary-p {
      text-align: justify;
      margin-bottom: ${t.summaryMb};
      font-size: ${t.fontSize};
      line-height: ${t.lineHeight};
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      margin-top: ${t.jobMt};
      margin-bottom: 2px;
      font-size: ${t.fontSize};
    }
    .sub-heading {
      font-weight: 700;
      font-size: 9.1pt;
      font-style: italic;
      color: #333;
      margin-top: 3px;
      margin-bottom: 1px;
    }
    ul {
      list-style-type: disc;
      margin-left: 16px;
      margin-bottom: 2px;
    }
    li {
      margin-bottom: ${t.liMargin};
      text-align: justify;
      font-size: ${t.fontSize};
      line-height: ${t.lineHeight};
    }
    .skills-section li {
      margin-bottom: ${t.liMargin};
    }
    .education-item {
      margin-bottom: 1px;
      font-size: ${t.fontSize};
    }
    @media print {
      body { background: transparent; padding: 0; }
      .actions-bar { display: none; }
      .page { width: 100%; box-shadow: none; padding: ${t.padV} 10mm; margin: 0; min-height: auto; }
      @page { size: A4; margin: 0; }
    }
    `;

    let testHtml = rawHtml.replace(/<style>[\s\S]*?<\/style>/, `<style>${css}</style>`);
    fs.writeFileSync('resume_candidate.html', testHtml);
    await page.goto('file:///' + path.resolve('resume_candidate.html').replace(/\\/g, '/'), { waitUntil: 'networkidle' });
    
    const metrics = await page.evaluate(() => {
      const pageEl = document.querySelector('.page');
      const eduEl = document.querySelector('section:last-of-type');
      return {
        pageHeight: pageEl.clientHeight,
        eduBottom: eduEl.offsetTop + eduEl.offsetHeight
      };
    });

    const pdfBuf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
    });
    
    console.log(`${t.name} => Edu Bottom: ${metrics.eduBottom} / 1123px (${1123 - metrics.eduBottom}px margin remaining, ${Math.round(metrics.eduBottom/1123*100)}% fill)`);
  }
  
  await browser.close();
})();
