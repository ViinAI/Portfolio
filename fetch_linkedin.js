const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('============================================================');
  console.log('Opening browser window to LinkedIn...');
  console.log('Please log into your LinkedIn account in the browser window.');
  console.log('============================================================\n');

  const userDataDir = path.join(__dirname, '.browser_session');

  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    channel: 'chrome',
    viewport: { width: 1366, height: 900 },
    args: ['--disable-blink-features=AutomationControlled']
  }).catch(async () => {
    return await chromium.launchPersistentContext(userDataDir, {
      headless: false,
      viewport: { width: 1366, height: 900 },
      args: ['--disable-blink-features=AutomationControlled']
    });
  });

  const page = context.pages().length > 0 ? context.pages()[0] : await context.newPage();

  console.log('Opening https://www.linkedin.com/in/viinai/ ...');
  await page.goto('https://www.linkedin.com/in/viinai/', { waitUntil: 'domcontentloaded' }).catch(() => {});

  console.log('Waiting for login & profile page render...');

  // Auto-detect loop with robust error handling for navigation transitions
  const maxWaitMs = 180000; // 3 minutes
  const startTime = Date.now();
  let profileDetected = false;

  while (Date.now() - startTime < maxWaitMs) {
    try {
      const url = page.url();
      if (!url.includes('/authwall') && !url.includes('/checkpoint') && !url.includes('/login') && !url.includes('/signup')) {
        const check = await page.evaluate(() => {
          const bodyText = document.body ? document.body.innerText : '';
          const hasSections = !!document.querySelector('main') || document.querySelectorAll('section').length > 2;
          const isNotLogin = !bodyText.includes('Join LinkedIn') && !bodyText.includes('Password (6+ characters)');
          const hasProfileIndicators = bodyText.includes('Experience') || bodyText.includes('About') || bodyText.includes('Activity') || bodyText.includes('Contact info') || bodyText.includes('Education');
          return hasSections && isNotLogin && hasProfileIndicators;
        }).catch(() => false);

        if (check) {
          console.log('\n✓ Logged-in profile detected! URL:', url);
          profileDetected = true;
          break;
        }
      }
    } catch (err) {
      // Ignored during page navigation
    }

    await page.waitForTimeout(2000);
  }

  if (!profileDetected) {
    console.log('Timeout reached. Extracting available page state anyway...');
  }

  console.log('Scrolling to load all dynamic content...');
  try {
    await page.evaluate(async () => {
      for (let i = 1; i <= 6; i++) {
        window.scrollTo(0, (document.body.scrollHeight / 6) * i);
        await new Promise(r => setTimeout(r, 600));
      }
      window.scrollTo(0, 0);
    });
  } catch (e) {}

  await page.waitForTimeout(2000);

  // Take full screenshot
  try {
    await page.screenshot({ path: 'linkedin_screenshot.png', fullPage: true });
    console.log('✓ Screenshot saved to linkedin_screenshot.png');
  } catch (e) {
    console.log('Screenshot error:', e.message);
  }

  // Extract structured details
  let extracted = { title: '', url: page.url(), fullText: '', name: '', headline: '', sections: [] };
  try {
    extracted = await page.evaluate(() => {
      const getText = (selector) => {
        const el = document.querySelector(selector);
        return el ? el.innerText.trim() : '';
      };

      const getAll = (selector) => {
        return Array.from(document.querySelectorAll(selector)).map(e => e.innerText.trim()).filter(Boolean);
      };

      return {
        title: document.title,
        url: window.location.href,
        fullText: document.body ? document.body.innerText : '',
        name: getText('h1'),
        headline: getText('.text-body-medium, [data-generated-suggestion-target], .pv-text-details__left-panel div'),
        sections: getAll('section')
      };
    });
  } catch (e) {}

  fs.writeFileSync('extracted_profile.json', JSON.stringify(extracted, null, 2), 'utf8');
  fs.writeFileSync('linkedin_extracted.txt', `TITLE: ${extracted.title}\nURL: ${extracted.url}\nNAME: ${extracted.name}\nHEADLINE: ${extracted.headline}\n\n====================\nFULL CONTENT:\n${extracted.fullText}`, 'utf8');

  console.log('\n✓ Profile extraction successfully completed!');
  console.log('Files saved:');
  console.log('- linkedin_extracted.txt');
  console.log('- extracted_profile.json');
  console.log('- linkedin_screenshot.png');

  await context.close();
})();
