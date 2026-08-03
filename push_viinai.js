const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const envPath = path.join(__dirname, '.env');
let token = process.env.GITHUB_TOKEN;
let username = process.env.GITHUB_USERNAME || 'ViinAI';

if (!token && fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    if (line.startsWith('GITHUB_TOKEN=')) {
      token = line.split('=')[1].trim();
    }
    if (line.startsWith('GITHUB_USERNAME=')) {
      username = line.split('=')[1].trim();
    }
  }
}

if (!token) {
  console.error('Error: GITHUB_TOKEN not found in environment or .env file.');
  process.exit(1);
}

const REPO = "Portfolio";
const gitExe = 'C:\\msys64\\usr\\bin\\git.exe';
const remoteUrl = `https://${username}:${token}@github.com/${username}/${REPO}.git`;

try {
  execSync(`"${gitExe}" remote set-url origin "${remoteUrl}"`, { stdio: 'inherit' });
  console.log(`Pushing to https://github.com/${username}/${REPO}...`);
  execSync(`"${gitExe}" push -u origin main --force`, { stdio: 'inherit' });
  console.log(`✓ Successfully pushed to https://github.com/${username}/${REPO}`);
} catch (e) {
  console.error('Push error:', e.message);
}
