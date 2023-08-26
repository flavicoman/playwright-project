import { Given, When, Then } from "@cucumber/cucumber";


import { chromium, Page, Browser, ElementHandle } from "@playwright/test";

let browser: Browser;
let page: Page;

async function getTextFromElements(page: Page): Promise<string[]> { 
  await page.waitForSelector('xpath=//div[@class="tee_time_item"]');
  const elements = await page.$$('.tee_time_item');
  const textList: string[] = [];
  for (const element of elements) {
    const text = await element.textContent();
    if (text !== null) {
      textList.push(text);
    }
  }

  return textList;
}
Given('User is succesfully logged in', { timeout: 90000 }, async function () {
    const text = await page.locator("p:has-text('Coman')").textContent();
    console.log(text);
});

Then('User clicks on the + sign', { timeout: 12000 }, async function () {
    (async () => {
        const browser: Browser = await chromium.launch();
        const page: Page = await browser.newPage();

        await page.goto('https://staging.registrygolf.com/');

        const textList = await getTextFromElements(page);

        console.log(textList);

        await browser.close();
    })();

});
