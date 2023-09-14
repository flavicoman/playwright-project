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
  await admin.goToMembersPage();
});

Given('admin clicks on the {string} button', async function (string) {
 await  admin.clickPlusSign();
});

Given('admin adds valid firstName', async function () {
  await admin.addFirstName();
});

Given('admin adds valid lastName', async function () {
  await admin.addLastName();
});

Given('admin adds valid phoneNumber', async function () {
  setTimeout: 4000
  await admin.addPhoneNumber()
});

Given('admin adds valid email', async function () {
  await admin.addEmail()
});

Then('save button should be available', async function () {
   await admin.checkSaveBtn()
});

Then('save button for new member should be available', async function () {
  await admin.checkSaveButtonIsAvailable()
});

Then("click on '{}' button", async function (buttonName: string) {
  await this.page.locator('button', { hasText: buttonName }).click()
});

Given('admin clicks the save button', async function () {
  await admin.clickSaveButton();
});

Then('member should be added succesfully', async function () {
  admin.checkAddedMember();
});

When('admin adds invalid first name', async function () {
     admin.addInvalidName()
});

When('admin adds invalid last name', async function () {
    admin.addInvalidName()
});

Then('changes cannot be saved', async function () {
    await admin.checkSaveBtnIsDisabled()
});

When('admin adds invalid member phoneNumber', async function () {
  
 await  admin.addInvalidEmail()
  
});

When('admin adds invalid member email', async function () {
  
  await admin.addInvalidPhoneNumber()
});




