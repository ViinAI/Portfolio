const fs = require('fs');

const embeddedFonts = fs.readFileSync('embedded_fonts.css', 'utf8');
let html = fs.readFileSync('resume.html', 'utf8');

// Replace external font links with embedded fonts
html = html.replace(/<link rel="preconnect"[^>]*>\s*<link rel="preconnect"[^>]*>\s*<link href="https:\/\/fonts\.googleapis\.com[^>]*>/, '');

// Insert embedded fonts at top of <style>
html = html.replace('<style>', `<style>\n${embeddedFonts}\n`);

fs.writeFileSync('resume.html', html);
console.log('✓ resume.html updated with 100% self-contained embedded fonts!');
