import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../setup/pageFixture";
import { browserFunctions } from "../pages/browserFunctions";
//import { logInFunction, logOutFunction } from "../pages/browserFunctions";
import users from "../user-data/users.json"
import { logInFunctions } from "../pages/logInFunctions";
import { logOutFunction } from "../pages/logOutFunctions";

let mypage : browserFunctions 
let user : logInFunctions
let userOut : logOutFunction
    
  Given('User navigates to the application', async function () {
    mypage = new browserFunctions(pageFixture.page);
    await mypage.goto();
   });

  Given('User enter the username', async function () {
    await mypage.enterUsername(users.username);
  
  });

  Given('User enter the password', async function () {
   
    await mypage.enterPassword(users.pass);
   
  });
  
 

  When('User click on the signIn button', async function () {
    let user = new logInFunctions(pageFixture.page);
    await user.signIn();
    //await mypage.signIn();
  });

  Then('Login should be success', {timeout: 9000},  async function () {
    await user.logInSucces;
    //await mypage.logInSucces();
  });
  
  Then('the User clicks on the arrow button', async () => {
    let userOut = new logOutFunction(pageFixture.page);
   userOut.clickArrowBtn();
    //mypage.clickArrowBtn();
  });
  
  Then('the User clicks on the logout button', {timeout: 9000}, async function () {
    userOut.logout();
   // mypage.logout();
  });

  Then('the User clicks on the logout confirm button', async function () {
    userOut.confirmLogout();
   // mypage.confirmLogout();
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
