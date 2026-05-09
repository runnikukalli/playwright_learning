//import {test} from '@playwright/test';  

const {test,expect} = require('@playwright/test');

test.describe('Learn Page Tests', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');
  });       

  test('Verify Learn Page Navigation', async ({page}) => {
    const title = await page.title();
    console.log(`Page title is: ${title}`);

    const path = require('path');
    const screenshotPath = path.join(__dirname, 'output', 'testscreenshot.png');
    await page.screenshot({ path: screenshotPath });

  });
});
