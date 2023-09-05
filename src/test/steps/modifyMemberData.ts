import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/Login.page";
import { pageFixture } from "../setup/pageFixture";
import { MembersPage } from "../pages/MembersPage.page";

let admin: MembersPage;


Given('admin selects member\'s account', async function () {
    admin = new MembersPage(pageFixture.page)
    await new Promise(resolve => setTimeout(resolve, 4000));
    await admin.selectDesiredMember("Alex234 Teste")
});

Given('member\'s personal file pops up', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await admin.checkMembersCard()
});

Given('admin inserts new  firstName', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await admin.addAccountName()
});

Given('admin inserts new lastName', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await admin.addAccountLastName()
});

Given('admin insers new phoneNumber', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await admin.addAccountPhoneNumber()
});


Then('member\'s account data should be edited succesfully', async function () {
    await admin.checkAddedData()

});
