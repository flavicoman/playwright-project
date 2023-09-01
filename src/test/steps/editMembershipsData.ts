import { Given, When, Then } from "@cucumber/cucumber";
import { Locator, Page } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { membData } from "../pages/membershipData.page";

let admin: membData



Given('admin goes to the memberships panel', async function () {
    admin = new membData(pageFixture.page)
    await new Promise(resolve => setTimeout(resolve, 3000));
    admin.gotoMembershipSettings();
});
When('admin selects the maximum memberships allowed input box', async function () {
    admin.selectMMAInputBox();
});

When('admin edits the memberships number', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    admin.addMembershipsValue();
    await new Promise(resolve => setTimeout(resolve, 4000));
});

Then('maximum value should be adjusted', async function () {
    admin.checkAddedValue();
});

Given('admin selects the “+” symbol', async function () {
    admin.clickPlusSign()
});

Given('admin adds new Name', async function () {
    admin.addNewName()
    await new Promise(resolve => setTimeout(resolve, 2000));

});

Given('admin adds new  bookingGroup', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    admin.selectBookingGroup()
    await new Promise(resolve => setTimeout(resolve, 2000));
});

Given('admin adds max hours of play', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    admin.addMaxHours()
    await new Promise(resolve => setTimeout(resolve, 5000));
});

Given('admin adds months as expire date', async function () {
    admin.addMonthsDuration()
    await new Promise(resolve => setTimeout(resolve, 4000));
});

Given('admin selects subscriptionPlan', async function () {
    await new Promise(resolve => setTimeout(resolve, 4000));
    admin.selectSubscriptionPlan()
});
Given('click on the save button', async function () {
    admin.clickSavebutton()
    await new Promise(resolve => setTimeout(resolve, 4000));
});

Then('New membership plan should be added', async function () {
    admin.checkAddedMembershipPlan()
});

Given('admin selects the edit option of the desired planName', async function () {

    await new Promise(resolve => setTimeout(resolve, 4000));
    admin.selectEditOption()

});

Then('membership plan should be edited succesfully', async function () {
    admin.checkAddedMembershipPlan()

});