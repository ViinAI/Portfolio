const fs = require('fs');
const path = require('path');

const dirPath = 'portfolio-web/src';

const walk = (dir) => {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.css')) {
      let content = fs.readFileSync(p, 'utf8');
      let newContent = content.replace(/#fbfbfd/g, '#ffffff').replace(/#f5f5f7/g, '#ffffff');
      if (content !== newContent) {
        fs.writeFileSync(p, newContent);
        console.log(`Updated ${p}`);
      }
    }
  });
};

walk(dirPath);
console.log('Done replacing grays with pure white.');
