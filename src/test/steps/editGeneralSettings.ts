import { Given, When, Then } from "@cucumber/cucumber";
import { Page, Browser } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { Locator } from "@playwright/test";
import { SettingsPage } from "../pages/SettingsPage.page";






let browser: Browser;
let page: Page;
let admin: SettingsPage

Given('admin navigates to the settings panel', async function () {
    admin = new SettingsPage(pageFixture.page);
    admin.goToSettingsPage()
    await new Promise(resolve => setTimeout(resolve, 1000));

});

When('admin adds new settingsName', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    admin.addSettingsName()
});

When('admin adds new primaryEmail', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    admin.addSettingsEmail()

});

When('admin adds new  website', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await admin.addWebsite()
});
When('admin adds new adressLine1', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await admin.addAdressLine1()
});

When('admin adds new adressLine2', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await admin.addAdressLine2()
});

When('admin addds new city', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await admin.addCityName()
});

When('admin adds new state', async function () {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await admin.addState()
});

When('admin adds new zip', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await admin.addZipCode()
});

When('admin adds new bay names', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await admin.addBaysName()
});

When('admin checks terms&co', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    admin.addTermsCo()
});



When('amin checks policy checkbox', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    admin.addCancellPolicy()
});



Then('general settings data should be updated', async function () {
    await new Promise(resolve => setTimeout(resolve, 5000));
    admin.checkAdddedSettings()
});

When('admin adds new invalid primaryEmail', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    admin.addInvalidEmail()

  });


  Then('email box  should invalidate incorrect email', async function () {
     admin.checkInvalidEmailInputBox()
     await new Promise(resolve => setTimeout(resolve, 5000));

  });

  Then('save button should be disabled', async function () {
    admin.checkSaveButton()
  });
