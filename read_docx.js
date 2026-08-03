const cp = require('child_process');
const fs = require('fs');

function extractDocx(filename) {
  if (!fs.existsSync(filename)) {
    console.log(`File not found: ${filename}`);
    return;
  }
  console.log(`\n=======================================================`);
  console.log(`DOCUMENT: ${filename}`);
  console.log(`=======================================================\n`);
  try {
    const xml = cp.execSync(`tar.exe -xOf "${filename}" word/document.xml`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
    // Replace paragraph endings with newlines and strip XML tags
    const paragraphs = xml.split(/<\/w:p>/).map(p => {
      return p.replace(/<[^>]+>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim();
    }).filter(p => p.length > 0);

    paragraphs.forEach(p => console.log(p));
  } catch (err) {
    console.error(`Error reading ${filename}:`, err.message);
  }
}

const files = [
  'Vinay_CV_Project_Updates.docx',
  'vinay_cv_updated.docx',
  'vinay_cv.docx'
];

files.forEach(extractDocx);
