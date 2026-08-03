const fs = require('fs');
const candidate = fs.readFileSync('resume_candidate.html', 'utf8');
fs.writeFileSync('resume.html', candidate);
console.log('✓ resume.html updated with finalized hierarchy!');
