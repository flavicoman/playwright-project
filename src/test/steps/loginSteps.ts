import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../setup/pageFixture";
import { browserFunctions } from "../pages/browserFunctions";

import users from "../user-data/users.json"
import { logInFunctions } from "../pages/logInFunctions";
import { logOutFunction } from "../pages/logOutFunctions";
import { LoginPage } from "../pages/Login.page";


let mypage: browserFunctions
let user: logInFunctions
let userOut: logOutFunction
let login: LoginPage

Given('User navigates to the application', async function () {
  mypage = new browserFunctions(pageFixture.page);
  await mypage.goto();
});

Given('User enter the username', async function () {

  login = new LoginPage(pageFixture.page);
  await login.enterUser(users.username)
});

Given('User enter the password', async function () {
  await login.enterPass(users.pass);
});

When('User click on the signIn button', async function () {
  await login.clickLoginBtn();

});

Then('Login should be success', { timeout: 90000 }, async function () {
  await user.loginSucces();
});

Then('the User clicks on the arrow button', async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  userOut = new logOutFunction(pageFixture.page);
  userOut.clickArrowBtn();
  //mypage.clickArrowBtn();
});

Then('the User clicks on the logout button', { timeout: 9000 }, async function () {

  userOut.logout();

});

Then('the User clicks on the logout confirm button', { timeout: 90000 }, async function () {
  userOut.confirmLogout();

});

Then('the user should be logged out', async function () {
  console.log("userloggedout")
});

