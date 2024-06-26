import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../setup/pageFixture";
import { BasePage } from "../pages/basePage.page";
import users from "../user-data/users.json"
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/homePage.page";


let mypage: BasePage
let user: HomePage;
let login: LoginPage

Given('admin navigates to the application', async function () {
  mypage = new BasePage(pageFixture.page);
  await mypage.goto();
});

Given('User enter valid username', async function () {

  login = new LoginPage(pageFixture.page);
  await login.enterUser(users.username)
});

Given('User enter valid password', async function () {
  await login.enterPass(users.pass);
});

When('User click on the signIn button', async function () {
  await login.clickLoginBtn();
});

Then('Login should be success', async function () {
  user = new HomePage(pageFixture.page);
  await user.verifySignIn();
});

Then('the User clicks on the arrow button', async () => {
  user.clickArrowBtn();
});

Then('the User clicks on the logout button', async function () {
  user.logOut();
});

Then('the User clicks on the logout confirm button', async function () {
  user.confirmLogOut();
});

When('User enter invalid username', async function () {
  login = new LoginPage(pageFixture.page);
  await login.enterUser(users.invalidUsername);
});

Then('user should not be allowed to login', async function () {
  await  login.checkLoginDenial(); 
});

When('User enter invalid password', async function () {
   await login.enterPass(users.invalidPassword)
});

Then('user should be notified about wrong password', async function () { 
  await login.checkWrongPassNotification()
});

