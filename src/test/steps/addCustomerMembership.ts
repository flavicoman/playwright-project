import { Given, Then, When } from "@cucumber/cucumber";

import { CustomerPage } from "../pages/customersPage.page";
import { pageFixture } from "../setup/pageFixture";

let admin: CustomerPage;
let customer: string = "Ana Puscac";


When('admin clicks on the customers name', async function () {
  admin = new CustomerPage(pageFixture.page);
  await admin.selectCustomer(customer);
});

Then('window with customer details should pop-up', async function () {
  admin.checkCustomerDetailWindow()
});

Then('admin navigates on the membership tab', async function () {
  admin.goToAddMembership()
  await new Promise(resolve => setTimeout(resolve, 2000));
});

Then('admin clicks “Add a Membership” button', async function () {
  await new Promise(resolve => setTimeout(resolve, 5000));
  admin.addMembership();
});

When('admin selects memebership plan', async function () {
  await new Promise(resolve => setTimeout(resolve, 1000));
  admin.addMembershipPlan()
});

Then('user membership should be added succesfully', async function () {
  await new Promise(resolve => setTimeout(resolve, 5000));
  admin.assertAddedMembership()
  await new Promise(resolve => setTimeout(resolve, 1000));

});

Then('customer should be moved in the Members section', async function () {
  admin.checkAddedMembership(customer)
});