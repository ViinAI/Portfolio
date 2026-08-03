const https = require('https');

const TOKEN = "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";

const req = https.request({
  hostname: 'api.github.com',
  path: '/user/repos?per_page=100&type=all',
  method: 'GET',
  headers: {
    'User-Agent': 'Node-Checker',
    'Authorization': `Bearer ${TOKEN}`,
    'Accept': 'application/vnd.github+json'
  }
}, (res) => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    try {
      const repos = JSON.parse(body);
      console.log(`Found ${repos.length} repos:`);
      repos.forEach(r => {
        console.log(`- ${r.full_name} (private: ${r.private}, permissions: ${JSON.stringify(r.permissions)})`);
      });
    } catch (e) {
      console.log('Error parsing:', body);
    }
  });
});

req.end();
