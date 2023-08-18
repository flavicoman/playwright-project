import { Given, When, Then } from "@cucumber/cucumber";

import {chromium, Page, Browser} from "@playwright/test";

let browser: Browser;
let page: Page;


  Given('User navigates to the application', async function () {
    browser = await chromium.launch({headless: false});
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

  Then('Login should be success', {timeout: 90000},  async function () {
    const text = await page.locator("p:has-text('Coman')").textContent();
    console.log(text);
  });
  
  Then('the User clicks on the arrow button', async () => {
    const svgLocator = page.locator('.text-body .avatar');
    await svgLocator.click();
  });
  
  

  Then('the User clicks on the logout button', async function () {
    await page.locator( "#flex gap-3").click();
  });

  Then('the User clicks on the logout confirm button', async function () {
    await page.locator("#buttons-row").click();
    //button[text()='Logout']
    //div[@class='buttons-row']//button[1]
  });

  Then('the user should be logged out', async function () {
    const loginFormDisplayed = await page.locator("div[@class='panel panel-default']").isVisible();
    // div.panel-body
    if (loginFormDisplayed) {
      console.log("User is logged out.");
    } else {
      console.log("User is not logged out.");
    }
  });

// 2) Scenario: Login should not be success # src\test\feature\login.feature:13



  When('Login should fail', async function () {
   const failureMessage = page.locator("div[class='error pageLevel']");
  });
