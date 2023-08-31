import { Given, When, Then } from "@cucumber/cucumber";

import { CustomerPage } from "../pages/customersPage.page";
import { pageFixture } from "../setup/pageFixture";

let admin : CustomerPage;

  Given('admin goes to the customers section', async function () {
      admin = new CustomerPage(pageFixture.page)
      admin.goToMembersPage();
      await new Promise(resolve => setTimeout(resolve, 3000));
      admin.goToCustomerPage();
      await new Promise(resolve => setTimeout(resolve, 3000));
  });

  Given('admin adds invalid customer firstName & lastName', async function () {
    admin.addInvalidName();
    await new Promise(resolve => setTimeout(resolve, 3000));
    
  });
 
  Given('admin adds valid customer email', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    admin.addEmail();
     //await new Promise(resolve => setTimeout(resolve, 3000));
  });

  Given('admin adds valid customer phoneNumber', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    admin.addPhoneNumber();
  
  });


  Then('save button should be unavailable', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    admin.checkSaveButtonAvailability();
   
  });

   Given('admin adds valid customer firstName', async function () {
     await new Promise(resolve => setTimeout(resolve, 3000));
     admin.addFirstName();
   
   });

   Given('admin adds valid customer lastName', async function () {
     await new Promise(resolve => setTimeout(resolve, 3000));
     admin.addLastName();
   });

  Given('customer should be added succesfully', async function () {
    await new Promise(resolve => setTimeout(resolve, 5000));
    admin.checkAddedCustomer()
  });

  Given('admin adds invalid phoneNumber', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    admin.addInvalidPhoneNumber();
  })








