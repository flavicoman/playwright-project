import { Given, When, Then } from "@cucumber/cucumber";
import { Page, Browser } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { SettingsPage } from "../pages/settingsPage.page";

let browser: Browser;
let page: Page;
let admin: SettingsPage

Given('admin navigates to the settings panel', async function () {
    admin = new SettingsPage(pageFixture.page);
    await admin.goToSettingsPage()
    await new Promise(resolve => setTimeout(resolve, 1000));
});

When('admin adds new settingsName', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await admin.addSettingsName()
});

When('admin adds new primaryEmail', async function () {
    await admin.addSettingsEmail()
});

When('admin adds new  website', async function () {
    await admin.addWebsite()
});
When('admin adds new adressLine1', async function () {
    await admin.addAdressLine1()
});

When('admin adds new adressLine2', async function () {
    await admin.addAdressLine2()
});

When('admin addds new city', async function () {
    await admin.addCityName()
});

When('admin adds new state', async function () {
    await admin.addState()
});

When('admin adds new zip', async function () {
    await admin.addZipCode()
});

When('admin adds new bay names', async function () {
    await admin.addBaysName()
});

When('admin checks terms&co', async function () {
    await admin.addTermsCo()
});

When('amin checks policy checkbox', async function () {
    await admin.addCancellPolicy()
});

Then('general settings data should be updated', async function () {
    await admin.checkAdddedSettings()
});

When('admin adds new invalid primaryEmail', async function () {
    await admin.addInvalidEmail()
});

Then('email box  should invalidate incorrect email', async function () {
    await admin.checkInvalidEmailInputBox()
});

Then('save button should be disabled', async function () {
    await admin.checkSaveButton()
});

When('admin adds invalid settingsName', async function () {
    await admin.addInvalidSettingsName()
});
