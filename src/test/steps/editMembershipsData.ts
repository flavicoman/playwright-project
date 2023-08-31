import { Given, When, Then } from "@cucumber/cucumber";
import { Locator, Page } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { membData } from "../pages/membershipData.page";

let admin : membData



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
    await this.page.locator('.input');
   
    
  });


