import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../setup/pageFixture";
import { MembersPage } from "../pages/membersPage.page";

let admin: MembersPage;

let selectedMember: string = "arnie arnie"

Given('admin selects member\'s account', async function () {
    admin = new MembersPage(pageFixture.page)
    await new Promise(resolve => setTimeout(resolve, 2000));
    await admin.selectDesiredMember(selectedMember)
});

Given('member\'s personal file pops up', async function () {
    await admin.checkMembersCard()
});

Given('admin inserts new  firstName', async function () {
    await admin.addAccountName()
});

Given('admin inserts new lastName', async function () {
    await admin.addAccountLastName()
});

Given('admin insers new phoneNumber', async function () {
    await admin.addAccountPhoneNumber()
});

Then('member\'s account data should be edited succesfully', async function () {
    await admin.checkAddedData()
});

When('admin clicks on the Membership tab', async function () {
    await admin.goToMembershipTab()
});

When('admin clicks the three dots on the right', async function () {
    await admin.clickTheThreeDots()
});

Then('deactivate membership button should appear', async function () { 
    await admin.checkDeactivateButton()
});
1
When('admin selects deactivate membership option', async function () {
    await admin.clickDeactivateOption()
});

When('admin clicks on the deactivate button', async function () {
    await admin.clickDeactivateButton()
});

Then('member should be moved back to customer section', async function () {
    await admin.checkDeactivatedMembership(selectedMember)
});

Then('the membership options feature should pop-up', async function () {
    await admin.checkOptionFeature()
  });

  Then('admin clicks “Edit membership”', async function () {
  await admin.clickEditOption()
  });

  When('admin selects date', async function () {
   await admin.addStartDate()
  });

  When('admin selects membershipPlan', async function () {
   await admin.addMembershipPlan()
  });

  Then('user\'s membership should be edited succesfully', async function () {
    await  admin.checkChangedMembershipPlan()
  });