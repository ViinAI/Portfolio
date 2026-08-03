const https = require('https');
const { execSync } = require('child_process');
const fs = require('fs');

const TOKEN = "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";
const USERNAME = "ViinAI";
const REPO_NAME = "Portfolio";

function githubRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.github.com${path}`);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'User-Agent': 'ViinAI-Portfolio-Sync',
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);
    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

(async () => {
  try {
    console.log(`Checking GitHub user authenticated...`);
    const userRes = await githubRequest('/user');
    console.log(`Authenticated as: ${userRes.data.login || 'Unknown'} (status ${userRes.status})`);

    console.log(`Checking repositories for ${USERNAME}...`);
    const reposRes = await githubRequest(`/users/${USERNAME}/repos?per_page=100`);
    const repos = Array.isArray(reposRes.data) ? reposRes.data : [];
    console.log(`Found ${repos.length} public/visible repositories.`);
    
    let targetRepo = repos.find(r => r.name.toLowerCase() === REPO_NAME.toLowerCase() || r.name.toLowerCase() === 'portfolio');

    if (targetRepo) {
      console.log(`Repository found: ${targetRepo.full_name}, private: ${targetRepo.private}`);
      if (!targetRepo.private) {
        console.log(`Converting ${targetRepo.full_name} to PRIVATE as requested...`);
        const updateRes = await githubRequest(`/repos/${USERNAME}/${targetRepo.name}`, 'PATCH', { private: true });
        console.log(`Update status: ${updateRes.status}, private: ${updateRes.data.private}`);
      }
    } else {
      console.log(`Creating new private repository '${REPO_NAME}'...`);
      const createRes = await githubRequest('/user/repos', 'POST', {
        name: REPO_NAME,
        description: "Vinay Kumar - Senior AI Engineer & Agentic Systems Architect Portfolio",
        private: true,
        auto_init: false
      });
      console.log(`Create repository status: ${createRes.status}`);
      targetRepo = createRes.data;
    }

    console.log('--- Setting up local Git repository ---');
    const gitExe = 'C:\\msys64\\usr\\bin\\git.exe';
    
    try {
      execSync(`"${gitExe}" init`, { stdio: 'inherit' });
    } catch(e){}

    execSync(`"${gitExe}" config user.name "Vinay Kumar"`, { stdio: 'inherit' });
    execSync(`"${gitExe}" config user.email "viinaimadotra@gmail.com"`, { stdio: 'inherit' });

    const remoteUrl = `https://${USERNAME}:${TOKEN}@github.com/${USERNAME}/${REPO_NAME}.git`;
    
    try {
      execSync(`"${gitExe}" remote remove origin`, { stdio: 'ignore' });
    } catch(e){}
    
    execSync(`"${gitExe}" remote add origin "${remoteUrl}"`, { stdio: 'inherit' });

    console.log('Staging files...');
    execSync(`"${gitExe}" add -A`, { stdio: 'inherit' });

    console.log('Committing...');
    try {
      execSync(`"${gitExe}" commit -m "feat: Vinay Kumar AI Engineer portfolio, Overleaf LaTeX CV, 1-page PDF, DOCX, and Vercel setup"`, { stdio: 'inherit' });
    } catch(e) {
      console.log('No new changes to commit or already committed.');
    }

    console.log('Pushing to GitHub (main branch)...');
    execSync(`"${gitExe}" branch -M main`, { stdio: 'inherit' });
    execSync(`"${gitExe}" push -u origin main --force`, { stdio: 'inherit' });

    console.log('✓ Successfully pushed to GitHub: https://github.com/' + USERNAME + '/' + REPO_NAME);
  } catch (err) {
    console.error('Error during GitHub sync:', err);
  }
})();
