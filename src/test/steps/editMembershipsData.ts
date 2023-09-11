import { Given, When, Then } from "@cucumber/cucumber";
import { Locator, Page } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { membData } from "../pages/membershipData.page";

let admin: membData

Given('admin goes to the memberships panel', async function () {
     admin = new membData(pageFixture.page)
    await new Promise(resolve => setTimeout(resolve, 3000));
    await admin.gotoMembershipSettings();
});
When('admin selects the maximum memberships allowed input box', async function () {
    await admin.selectMMAInputBox();
});

When('admin edits the memberships number', async function () {
    await admin.addMembershipsValue();
});

Then('maximum value should be adjusted', async function () {
    await admin.checkAddedValue();
});

Given('admin selects the “+” symbol', async function () {
    await admin.clickPlusSign()
});

Given('admin adds new Name', async function () {
    await  admin.addNewName()
});

Given('admin adds new  bookingGroup', async function () {
    await admin.selectBookingGroup()
});

Given('admin adds max hours of play', async function () {
   await admin.addMaxHours()
});

Given('admin adds months as expire date', async function () {
    await  admin.addMonthsDuration()
});

Given('admin selects subscriptionPlan', async function () {
   await  admin.selectSubscriptionPlan()
});
Given('click on the save button', async function () {
    await  admin.clickSavebutton()
});
Then('save button should be enabled', async function () {
    await  admin.checkSaveMembershipDataButton()
});

Then('New membership plan should be added', async function () {
    await admin.checkAddedMembershipPlan()
});

Given('admin selects the edit option of the desired planName', async function () {
   await  admin.selectEditOption()
});

Then('membership plan should be edited succesfully', async function () {
    await  admin.checkAddedMembershipPlan()
});

When('admin selects the three dots option of the desired planName', async function () {
    await  admin.selectDotsSymbol()
});

When('admin clicks the delete option of the desire planName', async function () {
    await   admin.selectDeleteOption()
});

When('“Delete membership plan“ pop-up window appears', async function () {
   await  admin.checkDeleteMPopUp()
});

Then('admin clicks on the “Continue” button', async function () {
    await  admin.clickContinue()
});

Then('plan should be deleted succesfully', async function () {
    await  admin.checkDeletedMembership()
});
