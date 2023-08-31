import { Given, Then } from "@cucumber/cucumber";

import { CustomerPage } from "../pages/customersPage.page";
import { pageFixture } from "../setup/pageFixture";

let admin : CustomerPage;
let customer : string = "Alex Alex";

Given('admin selects desired customer', async function (customer) {
    admin = new CustomerPage(pageFixture.page);
    await admin.selectCustomer(customer);
    
  });