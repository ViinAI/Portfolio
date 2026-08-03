const fs = require('fs');
const path = require('path');

const srcNext = path.join(__dirname, 'portfolio-web', '.next');
const destNext = path.join(__dirname, '.next');

if (fs.existsSync(srcNext)) {
  fs.cpSync(srcNext, destNext, { recursive: true });
  console.log('✓ Successfully copied portfolio-web/.next to root .next');
} else {
  console.error('Error: portfolio-web/.next not found!');
  process.exit(1);
}
