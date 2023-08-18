import { Given, When, Then } from "@cucumber/cucumber";


import { chromium, Page, Browser, ElementHandle } from "@playwright/test";

let browser: Browser;
let page: Page;



async function getTextFromElements(page: Page): Promise<string[]> {
      // Wait for the element to be available
  await page.waitForSelector('xpath=//div[@class="tee_time_item"]');

  // Get the list of elements
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
   
//     await new Promise(resolve => setTimeout(resolve, 12000));
//     await page.waitForSelector('xpath=//div[@class="tee_time_item"]')
//     var element  = await page.$('.tee_time_item');
//   //  await page.evaluate((el) => el.style.display = 'block', element);
//    // await element.click(); // Perform the interaction
//     var elements = await page.$$('.tee_time_item');
//     const textList: string[] = [];
//     console.log("hello" + elements)
//     elements.forEach(async function (element) {
//         var text = await element.textContent();
//         if (text !== null) {
//             textList.push(text);
//         }
//         console.log(element);
//     })
//     // elements.forEach((element) => {
//     //     var text = await element.textContent();
//     //     if (text !== null) {
//     //         textList.push(text);
//     //     }
//     //     console.log(element);
//     // })
//     return textList;
//     }
//     // element.forE (const element of elements) {
    //     var text = await element.textContent();
    //     if (text !== null) {
    //         textList.push(text);
    //     }
    //     console.log(element);
    // }
    // return textList;
    // // console.log(textList);



Given('User navigates to the application', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://tqgolfdev.b2clogin.com/tqgolfdev.onmicrosoft.com/b2c_1_signin/oauth2/v2.0/authorize?client_id=47fc16c2-f3e8-4dfc-91e3-8df8394a0f6a&scope=https%3A%2F%2Ftqgolfdev.onmicrosoft.com%2FWebApi%2FApiAccess%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fdev.registrygolf.com&client-request-id=7c5ae33a-278a-4435-9c1d-43fb8efe0fd4&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.36.0&client_info=1&code_challenge=Y1HxVMZlw09ay5_lDo-oXUEJNelDfWLCQniRvYK6x7U&code_challenge_method=S256&nonce=a6c5d85e-c061-49f3-8e45-82c291c4d24a&state=eyJpZCI6IjYwNTUyY2NmLWZhNzEtNGNjYS05YjlhLWYyYWEyZDc3NDVlOCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D")
});

Given('User enter the username as {string}', async function (userName) {
    await page.locator("input[placeholder='Email Address']").type(userName)
});

Given('User enter the password as {string}', async function (password) {
    await page.locator("input[placeholder='Password']").type(password)
});

When('User click on the signIn button', async function () {
    await page.locator("button[type='submit']").click();
});

Given('User is succesfully logged in', { timeout: 90000 }, async function () {
    const text = await page.locator("p:has-text('Coman')").textContent();
    console.log(text);
});

//   Then('User selects desired {string}', async function (string) {
//     await page.locator('div#root>div:nth-of-type(2)').click();

//   });

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
