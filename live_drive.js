const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('====================================================');
  console.log('🚀 LIVE DRIVER: Playwright Browser Automation Active');
  console.log('====================================================\n');

  const userDataDir = path.join(__dirname, '.browser_session');

  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    channel: 'chrome',
    viewport: { width: 1366, height: 900 },
    args: ['--disable-blink-features=AutomationControlled']
  }).catch(async (e) => {
    console.log('Launching bundled Chromium:', e.message);
    return await chromium.launchPersistentContext(userDataDir, {
      headless: false,
      viewport: { width: 1366, height: 900 },
      args: ['--disable-blink-features=AutomationControlled']
    });
  });

  // Listen for popups (e.g. Google OAuth popup)
  context.on('page', async (newPage) => {
    console.log('⚡ New tab/popup detected:', newPage.url());
    newPage.on('load', async () => {
      console.log('⚡ Popup loaded:', newPage.url());
      if (newPage.url().includes('accounts.google.com')) {
        console.log('⚡ Google Auth popup active. Waiting for user/account selection...');
      }
    });
  });

  const page = context.pages().length > 0 ? context.pages()[0] : await context.newPage();

  console.log('📍 Navigating to: https://www.linkedin.com/in/viinai/ ...');
  await page.goto('https://www.linkedin.com/in/viinai/', { waitUntil: 'domcontentloaded' }).catch(() => {});

  console.log('👀 Inspecting page state...');
  await page.waitForTimeout(3000);

  // Check if auth/login page is present
  const isAuthPage = await page.evaluate(() => {
    const text = document.body ? document.body.innerText : '';
    return text.includes('Join LinkedIn') || text.includes('Sign in') || window.location.href.includes('authwall');
  }).catch(() => false);

  if (isAuthPage) {
    console.log('🔐 Auth wall detected. Looking for "Continue with Google" / One-Tap button...');

    // Try clicking Google button
    const googleButtonSelectors = [
      'button:has-text("Continue with Google")',
      'div:has-text("Continue with Google")',
      '.google-auth button',
      '#google-one-tap__container iframe',
      'iframe[src*="google.com/gsi"]',
      'a:has-text("Sign in with Google")'
    ];

    let clicked = false;
    for (const sel of googleButtonSelectors) {
      try {
        const btn = page.locator(sel).first();
        if (await btn.isVisible({ timeout: 2000 })) {
          console.log(`👉 Clicking Google Auth element: ${sel}`);
          await btn.click({ timeout: 3000 });
          clicked = true;
          break;
        }
      } catch (err) {}
    }

    if (!clicked) {
      console.log('👉 Trying direct click on Google CTA button...');
      try {
        await page.click('button[data-tracking-control-name*="google"], [aria-label*="Google"]', { timeout: 3000 });
      } catch (e) {}
    }
  }

  console.log('\n⏳ Monitoring for active profile view (up to 120s)...');

  // Monitor until user is on the profile
  const maxWait = 120000;
  const start = Date.now();
  let found = false;

  while (Date.now() - start < maxWait) {
    try {
      const url = page.url();
      if (!url.includes('/authwall') && !url.includes('/login') && !url.includes('/signup') && !url.includes('checkpoint')) {
        const hasData = await page.evaluate(() => {
          const t = document.body ? document.body.innerText : '';
          return (t.includes('Experience') || t.includes('About') || t.includes('Activity') || t.includes('Contact info')) && !t.includes('Password (6+ characters)');
        }).catch(() => false);

        if (hasData) {
          console.log('🎉 Profile loaded successfully! Current URL:', url);
          found = true;
          break;
        }
      }
    } catch (e) {}
    await page.waitForTimeout(2000);
  }

  console.log('📜 Scrolling page smoothly to render all sections...');
  try {
    await page.evaluate(async () => {
      for (let i = 1; i <= 8; i++) {
        window.scrollTo(0, (document.body.scrollHeight / 8) * i);
        await new Promise(r => setTimeout(r, 600));
      }
      window.scrollTo(0, 0);
    });
  } catch (e) {}

  await page.waitForTimeout(2000);

  // Capture screenshot
  try {
    await page.screenshot({ path: 'linkedin_screenshot.png', fullPage: true });
    console.log('📸 Screenshot saved: linkedin_screenshot.png');
  } catch (e) {}

  // Extract all profile fields
  const data = await page.evaluate(() => {
    const getText = s => {
      const el = document.querySelector(s);
      return el ? el.innerText.trim() : '';
    };
    const getAll = s => Array.from(document.querySelectorAll(s)).map(e => e.innerText.trim()).filter(Boolean);

    return {
      title: document.title,
      url: window.location.href,
      name: getText('h1'),
      headline: getText('.text-body-medium, .pv-text-details__left-panel div'),
      fullText: document.body ? document.body.innerText : '',
      sections: getAll('section')
    };
  }).catch(() => ({}));

  fs.writeFileSync('extracted_profile.json', JSON.stringify(data, null, 2), 'utf8');
  fs.writeFileSync('linkedin_extracted.txt', `TITLE: ${data.title}\nURL: ${data.url}\nNAME: ${data.name}\nHEADLINE: ${data.headline}\n\n====================\nFULL CONTENT:\n${data.fullText}`, 'utf8');

  console.log('✅ Extraction complete! Data saved to linkedin_extracted.txt & extracted_profile.json');
  await context.close();
})();
