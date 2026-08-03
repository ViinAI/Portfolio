const https = require('https');

const TOKEN = "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";

const req = https.request({
  hostname: 'api.github.com',
  path: '/user',
  method: 'GET',
  headers: {
    'User-Agent': 'Node-Checker',
    'Authorization': `Bearer ${TOKEN}`,
    'Accept': 'application/vnd.github+json'
  }
}, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Scopes / Headers:');
  console.log('x-oauth-scopes:', res.headers['x-oauth-scopes']);
  console.log('x-accepted-oauth-scopes:', res.headers['x-accepted-oauth-scopes']);
  console.log('x-github-media-type:', res.headers['x-github-media-type']);
  
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    console.log('Body:', body);
  });
});

req.end();
