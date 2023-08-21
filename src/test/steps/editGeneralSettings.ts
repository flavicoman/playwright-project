import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";


let browser: Browser;
let page: Page;




Then('user navigates to general settings page', {timeout: 90000}, async function () {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await pageFixture.page.locator("(//button[contains(@class,'circle-button ')])[3]").click();
   // await page.locator("button.circle-button.selected").click();
    console.log("it works"); 
  });

//   Then('user adds new settings : {string} {string} {string} {string} {int} {string} {string} {string} <Zip>', async function (Name, primaryEmail, website, adressline1, adressline2, City, State, Zip ) {  
//     await new Promise(resolve => setTimeout(resolve, 3000));
//     await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[1]").click();
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[1]").clear();
//     await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[1]").type(Name);


//       return 'pending';
//     });

    Then('user adds new settings : {string} {string} {string} {string} {string} {string} {string} {string}', async function (string, string2, string3, string4, string5, string6, string7, string8) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[1]").click();
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[1]").clear();     //clear old name
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[1]").type(string);  //add new name 
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[2]").click();
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[2]").clear();     //clear primary email
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[2]").type(string2);  //add new primary email
    await new Promise(resolve => setTimeout(resolve, 10000));
    await pageFixture.page.locator("(//div[contains(@class,'input-container ')]/following-sibling::div)[2]").click();
    await pageFixture.page.locator("(//div[contains(@class,'input-container ')]/following-sibling::div)[2]").clear();     //clear primary email
    await pageFixture.page.locator("(//div[contains(@class,'input-container ')]/following-sibling::div)[2]").type(string3);

    // await pageFixture.page.locator("(//div[@class='fields-container']//div)[1]").click();
    // await pageFixture.page.locator("(//div[@class='fields-container']//div)[1]").clear();     //clear primary email
    // await pageFixture.page.locator("(//div[@class='fields-container']//div)[1]").type(string4);
    // await pageFixture.page.locator("(//div[@class='fields-container']//div)[3]").click();
    // await pageFixture.page.locator("(//div[@class='fields-container']//div)[3]").clear();     //clear primary email
    // await pageFixture.page.locator("(//div[@class='fields-container']//div)[3]").type(string5);
   
   






        return 'pending';
      });














  Then('user clicks the {string} button', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  
  Then('settings should be added succesfully', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });