import { Given, When, Then } from "@cucumber/cucumber";
import {Page, Browser} from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { BrowserFunctions } from "../pages/pageObjModel";

let mypage : BrowserFunctions 
    
  Given('User navigates to the application', async function () {
    mypage = new BrowserFunctions(pageFixture.page);
    await mypage.goto();
   });

  Given('User enter the username as {string}', async function (userName) {
    await mypage.enterUsername(userName);
  
  });

  Given('User enter the password as {string}', async function (password) {
    await mypage.enterPassword(password);
  });

  When('User click on the signIn button', async function () {
    await mypage.signIn();
  });

  Then('Login should be success', {timeout: 90000},  async function () {
    await mypage.logInSucces();
  });
  
  Then('the User clicks on the arrow button', async () => {
    mypage.clickArrowBtn();
  });
  
  Then('the User clicks on the logout button', async function () {
    await pageFixture.page.locator( "#flex gap-3").click();
  });

  Then('the User clicks on the logout confirm button', async function () {
    await pageFixture.page.locator("#buttons-row").click();
    //button[text()='Logout']
    //div[@class='buttons-row']//button[1]
  });

  Then('the user should be logged out', async function () {
    const loginFormDisplayed = await pageFixture.page.locator("div[@class='panel panel-default']").isVisible();
    // div.panel-body
    if (loginFormDisplayed) {
      console.log("User is logged out.");
    } else {
      console.log("User is not logged out.");
    }
  });

// 2) Scenario: Login should not be success # src\test\feature\login.feature:13



  When('Login should fail', async function () {
   const failureMessage = pageFixture.page.locator("div[class='error pageLevel']");
  });
