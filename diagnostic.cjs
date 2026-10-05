const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set mobile viewport (iPhone 12 Pro size)
  await page.setViewport({ width: 339, height: 557 });

  // Navigate to dev server
  await page.goto('http://localhost:5175', { waitUntil: 'networkidle2' });

  // 1. Capture base state at top
  await page.screenshot({ path: 'C:\\Users\\Nitesh singh\\OneDrive\\Desktop\\ManasMatrix_Latest\\test_top.png' });

  // 2. Scroll down 50px to trigger scrolled state
  await page.evaluate(() => window.scrollBy(0, 50));
  await new Promise(r => setTimeout(r, 500)); // wait for transition
  await page.screenshot({ path: 'C:\\Users\\Nitesh singh\\OneDrive\\Desktop\\ManasMatrix_Latest\\test_scrolled.png' });

  // 3. Hide navbar
  await page.addStyleTag({ content: '#navbar { display: none !important; }' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:\\Users\\Nitesh singh\\OneDrive\\Desktop\\ManasMatrix_Latest\\test_no_navbar.png' });

  // 4. Restore navbar, hide inner
  await page.addStyleTag({ content: '#navbar { display: block !important; } .navbar__inner { display: none !important; }' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:\\Users\\Nitesh singh\\OneDrive\\Desktop\\ManasMatrix_Latest\\test_no_inner.png' });

  // 5. Restore inner, set background to transparent
  await page.addStyleTag({ content: '.navbar__inner { display: flex !important; } .navbar--scrolled { background: transparent !important; }' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:\\Users\\Nitesh singh\\OneDrive\\Desktop\\ManasMatrix_Latest\\test_bg_transparent.png' });

  await browser.close();
  console.log("Done");
})();
