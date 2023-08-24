import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";


let browser: Browser;
let page: Page;





Given('the user clicks on the "Members" page button', async function () {
    // await page.locator('div:nth-child(2) > .circle-button').first().click();
    await page.locator("(//div[@class='small-format-item']//button)[2]").click();
});


Given('user clicks on {string} button', async function (buttonName) {

    await page.locator('.add-member-icon > .svg-inline--fa').click();
});

Given('user insert personal data: {string}', async function (firstName, lastName, email, phone) {
  
  await page.getByText('First Name').click();
  await page.getByRole('textbox').first().fill(firstName);
  await page.getByText('Last Name').click();
  await page.getByRole('textbox').nth(1).fill(lastName);
  await page.locator('[id="headlessui-dialog-\\:r0\\:"]').getByText('Email').click();
  await page.locator('input[type="email"]').fill(email);
  await page.locator('[id="headlessui-dialog-\\:r0\\:"]').getByText('Phone').click();
  await page.getByRole('spinbutton').fill(phone);
});



When('the user clicks on {string} button', async function (string) {
    await page.getByRole('button', { name: 'Save' }).click();
  });


Then('the member should be created', async function () {
    const text = await page.locator("table[contains(@class,'styled-table members-table')]/tbody[1]/tr[1]/td[3]").textContent();
    console.log(text);
  });
