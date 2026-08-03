const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const envPath = path.join(__dirname, '.env');
let token = process.env.GITHUB_TOKEN;
let username = process.env.GITHUB_USERNAME || 'ViinAI';

if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  const matchToken = content.match(/GITHUB_TOKEN=([^\r\n]+)/);
  if (matchToken) token = matchToken[1].trim();
  const matchUser = content.match(/GITHUB_USERNAME=([^\r\n]+)/);
  if (matchUser) username = matchUser[1].trim();
}

console.log(`Debug: Username=${username}, TokenLength=${token ? token.length : 0}, TokenPrefix=${token ? token.substring(0, 7) : 'NONE'}`);

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
