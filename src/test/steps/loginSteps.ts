import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../setup/pageFixture";
import { BasePage } from "../pages/BasePage.page";
import users from "../user-data/users.json"
import { LoginPage } from "../pages/Login.page";
import { HomePage } from "../pages/HomePage.page";


let mypage: BasePage
let user: HomePage;
let login: LoginPage

Given('admin navigates to the application', async function () {
  mypage = new BasePage(pageFixture.page);
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
  user = new HomePage(pageFixture.page);
  await user.verifySignIn();
});

Then('the User clicks on the arrow button', async () => {
  user.clickArrowBtn();
});

Then('the User clicks on the logout button', { timeout: 9000 }, async function () {
  user.logOut();
});

Then('the User clicks on the logout confirm button', { timeout: 90000 }, async function () {
  user.confirmLogOut();
});

Then('the user should be logged out', async function () {

});

