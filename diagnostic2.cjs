const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 339, height: 557 });
  await page.goto('http://localhost:5175', { waitUntil: 'networkidle2' });

  // Scroll down to trigger scrolled state
  await page.evaluate(() => window.scrollBy(0, 50));
  await new Promise(r => setTimeout(r, 500));

  // Test 1: box-shadow none
  await page.addStyleTag({ content: '.navbar--scrolled { box-shadow: none !important; }' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:\\Users\\Nitesh singh\\OneDrive\\Desktop\\ManasMatrix_Latest\\test_no_shadow.png' });

  // Reset shadow, Test 2: backdrop-filter none
  await page.addStyleTag({ content: '.navbar--scrolled { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important; backdrop-filter: none !important; }' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:\\Users\\Nitesh singh\\OneDrive\\Desktop\\ManasMatrix_Latest\\test_no_backdrop.png' });

  // Reset both, Test 3: Fractional height check
  const navbarHeight = await page.evaluate(() => {
     const nav = document.getElementById('navbar');
     return nav ? nav.getBoundingClientRect().height : null;
  });
  console.log("Navbar computed height:", navbarHeight);

  await browser.close();
})();
