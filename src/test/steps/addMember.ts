import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/login.page";
import { pageFixture } from "../setup/pageFixture";
import users from "../user-data/users.json"
import { MembersPage } from "../pages/membersPage.page";

let login: LoginPage;
let admin: MembersPage;

Given('admin is logged in', async function () {
  login = new LoginPage(pageFixture.page)
  admin = new MembersPage(pageFixture.page)
  await login.enterUser(users.username);
  await login.enterPass(users.pass);
  await login.clickLoginBtn();
  await admin.verifySignIn();
});

Given('admin navigates to the members panel', async function () {
  //admin.goToDesiredPage(this.page.locator("div.small-format-item>>nth=1"));
  admin.goToMembersPage();
});

Given('admin clicks on the {string} button', async function (string) {
  admin.clickPlusSign();
});

Given('admin adds valid firstName', async function () {
  admin.addFirstName();
  await new Promise(resolve => setTimeout(resolve, 5000));
});

Given('admin adds valid lastName', async function () {
  admin.addLastName();
  await new Promise(resolve => setTimeout(resolve, 2000));
});

Given('admin adds valid phoneNumber', async function () {
  admin.addPhoneNumber()
  //admin.selectMembership();
});

Given('admin adds valid email', async function () {

  admin.addEmail()
  await new Promise(resolve => setTimeout(resolve, 2000));
});

Then('save button should be available', async function () {

});

Then("click on '{}' button", async function (buttonName: string) {
  await this.page.locator('button', { hasText: buttonName }).click()
});

Given('admin clicks the save button', async function () {
  admin.clickSaveButton();

});

Then('member should be added succesfully', async function () {

  admin.checkAddedMember();
});






