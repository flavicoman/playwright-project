import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";


let browser: Browser;
let page: Page;


Then('user navigates to customers page', {timeout: 90000}, async function () {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await pageFixture.page.locator("(//div[@class='menu-items-container']//div)[3]").click();
   
   // await page.locator("button.circle-button.selected").click();
    console.log("it works"); 
  });

//   Given('user selects customers section', {timeout: 90000}, async function () {
   
//     await pageFixture.page.locator("(//div[@class='flex items-center'])[2]").click();
//     console.log("customers section"); 
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });
Then('user selects customers section',{timeout: 90000}, async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await pageFixture.page.locator("//div[text()='Customers']").click();
    console.log("user is in the customers section");
    return Promise.resolve("pending");
  });

  Then('user clicks on the "+" button', async function (string) {
    await page.locator(".add-member-icon .svg-inline--fa fa-plus fa-xl").click();// Write code here that turns the phrase above into concrete actions
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








