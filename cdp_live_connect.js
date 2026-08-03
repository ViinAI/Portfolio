Iconst { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  console.log('======================================================');
  console.log('🔌 LIVE CONNECT: Attaching to Chrome CDP port 9222...');
  console.log('======================================================\n');

  let browser;
  for (let attempt = 1; attempt <= 30; attempt++) {
    try {
      browser = await chromium.connectOverCDP('http://localhost:9222');
      console.log('✓ Successfully attached Playwright to Chrome!');
      break;
    } catch (e) {
      console.log(`Waiting for Chrome on port 9222 (attempt ${attempt}/30)...`);
      await new Promise(r => setTimeout(r, 1500));
    }
  }

  if (!browser) {
    console.error('❌ Could not connect to Chrome on port 9222.');
    process.exit(1);
  }

  const contexts = browser.contexts();
  const context = contexts.length > 0 ? contexts[0] : await browser.newContext();

  // Continuously listen for new pages/popups (e.g. Google Sign-in popup)
  context.on('page', async p => {
    console.log('⚡ Detected popup/tab:', p.url());
  });

  const getActiveLinkedInPage = () => {
    const pages = context.pages();
    return pages.find(p => p.url().includes('linkedin.com')) || pages[0];
  };

  let page = getActiveLinkedInPage();
  if (!page) page = await context.newPage();

  console.log('Initial URL:', page.url());
  if (!page.url().includes('linkedin.com/in/viinai')) {
    console.log('Navigating to https://www.linkedin.com/in/viinai/ ...');
    await page.goto('https://www.linkedin.com/in/viinai/', { waitUntil: 'domcontentloaded' }).catch(() => { });
  }

  console.log('\n>>> Please complete Google Sign-in / LinkedIn Login in the opened Chrome window.');
  console.log('>>> Live monitoring active (will extract the moment you are on the profile)...\n');

  let loggedIn = false;
  while (!loggedIn) {
    try {
      const allPages = context.pages();
      for (const p of allPages) {
        const u = p.url();
        if (u.includes('linkedin.com/in/viinai') && !u.includes('/authwall') && !u.includes('/login') && !u.includes('/signup')) {
          const bodyText = await p.evaluate(() => document.body ? document.body.innerText : '').catch(() => '');
          if (bodyText.includes('Experience') || bodyText.includes('About') || bodyText.includes('Activity') || bodyText.includes('Contact info') || bodyText.includes('Education')) {
            console.log('\n🎉 FOUND PROFILE ON TAB:', u);
            page = p;
            loggedIn = true;
            break;
          }
        }
      }
    } catch (e) { }

    if (!loggedIn) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log('📜 Scrolling page to load all dynamic sections...');
  try {
    await page.evaluate(async () => {
      for (let i = 1; i <= 8; i++) {
        window.scrollTo(0, (document.body.scrollHeight / 8) * i);
        await new Promise(r => setTimeout(r, 500));
      }
      window.scrollTo(0, 0);
    });
  } catch (e) { }

  await new Promise(r => setTimeout(r, 2000));

  // Take screenshot
  try {
    await page.screenshot({ path: 'linkedin_screenshot.png', fullPage: true });
    console.log('📸 Full-page screenshot saved to linkedin_screenshot.png');
  } catch (e) {
    console.log('Screenshot warning:', e.message);
  }

  // Extract structured data
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
      headline: getText('.text-body-medium, [data-generated-suggestion-target], .pv-text-details__left-panel div'),
      fullText: document.body ? document.body.innerText : '',
      sections: getAll('section')
    };
  }).catch(() => ({}));

  fs.writeFileSync('extracted_profile.json', JSON.stringify(data, null, 2), 'utf8');
  fs.writeFileSync('linkedin_extracted.txt', `TITLE: ${data.title}\nURL: ${data.url}\nNAME: ${data.name}\nHEADLINE: ${data.headline}\n\n====================\nFULL CONTENT:\n${data.fullText}`, 'utf8');

  console.log('\n======================================================');
  console.log('✅ PROFILE DATA SUCCESSFULLY EXTRACTED & SAVED!');
  console.log('======================================================');
  console.log('Name:', data.name);
  console.log('Headline:', data.headline);
  console.log('Content length:', data.fullText ? data.fullText.length : 0);
})();
