const { execSync } = require('child_process');

const TOKEN = "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";
const USERNAME = "ViinAI";
const REPO = "ViinAI";

const gitExe = 'C:\\msys64\\usr\\bin\\git.exe';
const remoteUrl = `https://${USERNAME}:${TOKEN}@github.com/${USERNAME}/${REPO}.git`;

try {
  execSync(`"${gitExe}" remote set-url origin "${remoteUrl}"`, { stdio: 'inherit' });
  console.log(`Pushing to https://github.com/${USERNAME}/${REPO}...`);
  execSync(`"${gitExe}" push -u origin main --force`, { stdio: 'inherit' });
  console.log(`✓ Successfully pushed to https://github.com/${USERNAME}/${REPO}`);
} catch (e) {
  console.error('Push error:', e.message);
}
