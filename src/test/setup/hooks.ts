import {chromium, Page, Browser} from "@playwright/test";

import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { pageFixture }  from "./pageFixture";


let browser: Browser;
let page: Page;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  pageFixture.page = page;
});

AfterAll(async () => {
  await browser.close();
});

export { page }; // Export the initialized 'page' object for use in step definitions
