const https = require('https');
const fs = require('fs');
const path = require('path');

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

(async () => {
  console.log('Downloading font files for local embedding...');
  
  if (!fs.existsSync('fonts')) {
    fs.mkdirSync('fonts');
  }

  const fonts = [
    { name: 'regular', weight: '400', style: 'normal', url: 'https://fonts.gstatic.com/s/ebgaramond/v33/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-6_RUAw.ttf' },
    { name: 'medium', weight: '500', style: 'normal', url: 'https://fonts.gstatic.com/s/ebgaramond/v33/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-2fRUAw.ttf' },
    { name: 'semibold', weight: '600', style: 'normal', url: 'https://fonts.gstatic.com/s/ebgaramond/v33/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-NfNUAw.ttf' },
    { name: 'bold', weight: '700', style: 'normal', url: 'https://fonts.gstatic.com/s/ebgaramond/v33/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-DPNUAw.ttf' },
    { name: 'italic', weight: '400', style: 'italic', url: 'https://fonts.gstatic.com/s/ebgaramond/v33/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QI96.ttf' },
    { name: 'italic-semibold', weight: '600', style: 'italic', url: 'https://fonts.gstatic.com/s/ebgaramond/v33/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7diR496.ttf' },
  ];

  let fontFaces = '';

  for (let f of fonts) {
    console.log(`Fetching ${f.name}...`);
    const buf = await downloadBuffer(f.url);
    const b64 = buf.toString('base64');
    fs.writeFileSync(`fonts/ebgaramond-${f.name}.ttf`, buf);
    
    fontFaces += `
    @font-face {
      font-family: 'EB Garamond';
      font-style: ${f.style};
      font-weight: ${f.weight};
      src: url(data:font/truetype;charset=utf-8;base64,${b64}) format('truetype');
    }
    `;
  }

  fs.writeFileSync('embedded_fonts.css', fontFaces);
  console.log('✓ All fonts downloaded and converted to embedded_fonts.css successfully!');
})();
