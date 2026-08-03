const fs = require('fs');

let rawHtml = fs.readFileSync('resume.html', 'utf8');

// Replace the dropdown toolbar with just the direct download buttons
rawHtml = rawHtml.replace(
  /<div class="top-toolbar">[\s\S]*?<\/div>/,
  `<div class="top-toolbar">
    <a href="Vinay_Kumar_CV.pdf" download="Vinay_Kumar_CV.pdf" class="btn">⬇️ Download PDF</a>
    <a href="Vinay_Kumar_CV.docx" download="Vinay_Kumar_CV.docx" class="btn btn-secondary">⬇️ Download Word (.docx)</a>
  </div>`
);

fs.writeFileSync('resume.html', rawHtml);
fs.writeFileSync('cvs/resume.html', rawHtml);
console.log('✓ Production top bar with direct download buttons locked in!');
