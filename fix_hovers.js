const fs = require('fs');
const path = require('path');

const dirPath = 'portfolio-web/src';

const walk = (dir) => {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx')) {
      let content = fs.readFileSync(p, 'utf8');
      let newContent = content.replace(/hover:bg-\[#ffffff\]/g, 'hover:bg-[#f5f5f7]');
      if (content !== newContent) {
        fs.writeFileSync(p, newContent);
        console.log(`Updated hovers in ${p}`);
      }
    }
  });
};

walk(dirPath);
