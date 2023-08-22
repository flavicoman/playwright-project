import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { expect } from 'expect';

let browser: Browser;
let page: Page;

Then('user navigates to general settings page', {timeout: 90000}, async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await pageFixture.page.locator("(//button[contains(@class,'circle-button ')])[3]").click();
   // await page.locator("button.circle-button.selected").click();
    console.log("it works"); 
  });
    Then('user adds new settings : {string} {string} {string} {string} {string} {string} {string} {string}', async function (string, string2, string3, string4, string5, string6, string7, string8) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[1]").click();
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[1]").clear();     //clear old name
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[1]").type(string);  //add new name 
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[2]").click();
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[2]").clear();     //clear primary email
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[2]").type(string2);  //add new primary email
    //await new Promise(resolve => setTimeout(resolve, 10000));
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[3]").click();
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[3]").clear();     //clear website
    await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[3]").type(string3); //add new website 
    await pageFixture.page.locator("(//label[text()='Website']/following::input)[1]").click();
    await pageFixture.page.locator("(//label[text()='Website']/following::input)[1]").clear();     //clear adress line 1 
    await pageFixture.page.locator("(//label[text()='Website']/following::input)[1]").type(string4); //add new adress line 1 
    await pageFixture.page.locator("(//label[text()='Address Line 1']/following::input)[1]").click();
    await pageFixture.page.locator("(//label[text()='Address Line 1']/following::input)[1]").clear();     //clear adress line 2 
    await pageFixture.page.locator("(//label[text()='Address Line 1']/following::input)[1]").type(string5); //add adress line 2 
    await pageFixture.page.locator("(//label[text()='Address Line 2 (Optional)']/following::input)[1]").click();
    await pageFixture.page.locator("(//label[text()='Address Line 2 (Optional)']/following::input)[1]").clear();     //clear city 
    await pageFixture.page.locator("(//label[text()='Address Line 2 (Optional)']/following::input)[1]").type(string6); //add city 
   // await new Promise(resolve => setTimeout(resolve, 5000));
//     await pageFixture.page.locator("div.dropdown-arrow.css-1xc3v61-indicatorContainer").click();
//    // await pageFixture.page.locator("(//div[@class='text-displayFive css-1f98jaa']//div)[2]").clear();    
//     await pageFixture.page.locator("(//div[@class='text-displayFive css-1f98jaa']//div)[2]").selectOption(string7); 
    await pageFixture.page.locator("(//label[text()='City']/following::input)[2]").click();
    await pageFixture.page.locator("(//label[text()='City']/following::input)[2]").clear();     //clear old zip 
    await pageFixture.page.locator("(//label[text()='City']/following::input)[2]").type(string8); // add new zip  
});

  Then('user clicks the {string} button', async function (string) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await pageFixture.page.locator("//div[@class='save-container']//button[1]").click();
    //await new Promise(resolve => setTimeout(resolve, 000));
  });
 
  Then('user selects new bays : {string}', async function (string) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await pageFixture.page.locator("(//label[text()='Zip']/following::input)[1]").click();
    await pageFixture.page.locator("(//label[text()='Zip']/following::input)[1]").clear();     //clear old zip 
    await pageFixture.page.locator("(//label[text()='Zip']/following::input)[1]").type(string);
   
  });

  Then('user defines legal conditions', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await pageFixture.page.locator("(//input[@class='checkbox-input'])[1]").check();
    expect(await pageFixture.page.locator("(//input[@class='checkbox-input'])[1]").isChecked()).toBeTruthy();
 
  });
  
  Then('settings should be added succesfully : {string}', async function (string) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const lastValue = await pageFixture.page.locator("(//div[contains(@class,'flex flex-col-reverse')]//input)[1]").inputValue();
    if(lastValue === string)
    { console.log("Settings have been saved succesfully")}
     else {
      console.log("Bro something is not ok");
     }

})
