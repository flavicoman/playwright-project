import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";

let browser: Browser;
let page: Page;


Then('user navigates to customers page', async function () {
    await page.locator("(//div[@class='menu-items-container']//div)[3]").click();
    console.log("it works"); 
  });


  Then('user selects customers section', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Then('user inserts {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('user clicks on the save button', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('new customer should be added', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  






