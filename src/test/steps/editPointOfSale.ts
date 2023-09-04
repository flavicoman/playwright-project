import { Given, When, Then } from "@cucumber/cucumber";
import { Locator, Page } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { PointSales } from "../pages/pointOfSale.page";

let admin : PointSales

Given('admin navigates to the point of sale panel', async function () {
    admin = new PointSales (pageFixture.page);
    await new Promise(resolve => setTimeout(resolve, 3000));
    admin.goToPointOfSale()
  });

  Given('admin adds newRateName', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    admin.addNewRateName()
  });

  Given('admin adds new fee', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    admin.addFee()
  });

  Given('admin adds category', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
     admin.addCategory()
  });

  Given('admin adds glCode', async function () {
    await new Promise(resolve => setTimeout(resolve, 3000));
    admin.addGLCode();
  });

  Then('new rate should be added succesfully', async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await admin.checkAddedrate()
  });


  Given('admin clicks on the dots symbol on the right side of the desired rate name', async function () {
    await new Promise(resolve => setTimeout(resolve, 4000));
    admin.selectThreeDots()
    });

    Given('admin selects the edit option', async function () {
      await new Promise(resolve => setTimeout(resolve, 2000));
      admin.selectEditOption()
      
    });

    Given('admin adds new category', async function () {
      await new Promise(resolve => setTimeout(resolve, 2000));
      admin.addCategory()
      
    });
    Given('admin adds new glCode', async function () {
      await new Promise(resolve => setTimeout(resolve, 2000));
      admin.addGLCode()
      
    });
    
    Then('rate edit should be saved succesfully', async function () {
      await new Promise(resolve => setTimeout(resolve, 2000));
      admin.checkEditedRate()
      
    });