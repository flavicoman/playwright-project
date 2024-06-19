import { Given, Then, When } from "@cucumber/cucumber";

import { CustomerPage } from "../pages/customersPage.page";
import { pageFixture } from "../setup/pageFixture";

let admin: CustomerPage;
let customer: string = "aldo gigolo";


When('admin clicks on the customers name', async function () {
  admin = new CustomerPage(pageFixture.page);
  await admin.selectCustomer(customer);
});

Then('window with customer details should pop-up', async function () {
  await admin.checkCustomerDetailWindow()
});

Then('admin navigates on the membership tab', async function () {
  await admin.goToAddMembership()
 
});

Then('admin clicks “Add a Membership” button', async function () {
 await  admin.addMembership();
});

When('admin selects memebership plan', async function () {
 await  admin.addMembershipPlan()
});

Then('user membership should be added succesfully', async function () {
  await  admin.assertAddedMembership()
});

Then('customer should be moved in the Members section', async function () {
  admin.checkAddedMembership(customer)
});