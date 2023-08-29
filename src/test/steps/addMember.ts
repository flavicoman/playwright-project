import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage} from "../pages/login.page";
import { pageFixture } from "../setup/pageFixture";
import users from "../user-data/users.json"
import { HomePage } from "../pages/homePage.page";
import { MembersPage } from "../pages/membersPage.page";


let login : LoginPage; 
let admin : MembersPage;


  Given('admin is logged in', async function () {
    login = new LoginPage(pageFixture.page)
    admin = new MembersPage(pageFixture.page)
    await login.enterUser(users.username);
    await login.enterPass(users.pass);
    await login.clickLoginBtn();
    await admin.verifySignIn();
    
  });

  Given('admin navigates to the members panel', async function () {
    admin.goToMembersPage();
  });


  Given('admin clicks on the {string} button', async function (string) {
    admin.clickPlusSign();
  });


  Given('admin adds valid firstName', async function () {
  
    admin.addFirstName()
  });


  Given('admin adds valid lastName', async function () {
  
    admin.addLastName()
  });

  Given('admin adds valid phoneNumber', async function () {
  
    admin.addPhoneNumber()
  });


  Given('admin adds valid email', async function () {
  
    admin.addEmail()
  });


  Then('save button should be available', async function () {
  
    admin.checkSaveButtonAvailability();
  });


  Then('admin clicks the save button', async function () {
  
    admin.clickSaveButton();
  });


  Then('member should be added succesfully', async function () {
  
    admin.checkAddedMember();
  });






