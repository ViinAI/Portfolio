const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('Launching browser to capture apple.com...');
  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
      channel: 'msedge', // use installed Edge for maximum reliability
    });
  } catch (e) {
    console.log('Falling back to default chromium...');
    browser = await chromium.launch({ headless: true });
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 1080 },
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  });

  const page = await context.newPage();

  console.log('Navigating to https://www.apple.com ...');
  await page.goto('https://www.apple.com', { waitUntil: 'networkidle', timeout: 30000 });
  
  const appleHomePath = path.resolve(__dirname, 'apple_home.png');
  await page.screenshot({ path: appleHomePath, fullPage: false });
  console.log(`Saved Apple Homepage screenshot to: ${appleHomePath}`);

  console.log('Navigating to https://www.apple.com/mac/ ...');
  await page.goto('https://www.apple.com/mac/', { waitUntil: 'networkidle', timeout: 30000 });
  const appleMacPath = path.resolve(__dirname, 'apple_mac.png');
  await page.screenshot({ path: appleMacPath, fullPage: false });
  console.log(`Saved Apple Mac Product Showcase screenshot to: ${appleMacPath}`);

  await browser.close();
  console.log('Browser capture complete!');
})();
