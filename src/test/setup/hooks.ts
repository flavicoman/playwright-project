import {chromium, Page, Browser, BrowserContext} from "@playwright/test";
import { setDefaultTimeout } from "@cucumber/cucumber";
import { BeforeAll, AfterAll, After , Before} from "@cucumber/cucumber";
import { pageFixture }  from "./pageFixture";

const DEFAULT_TIMEOUT = 20000;
setDefaultTimeout(DEFAULT_TIMEOUT);


let browser: Browser;
let page: Page;
let context: BrowserContext; 



BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
 // page = await browser.newPage();

  pageFixture.page = page;
  
});

Before(async function(){
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
})

// After(async function ({pickle}){
//   const img = await  pageFixture.page.screenshot({path: "./test-result/screenshots/" + pickle.name , type:"png"})
//   await this.attach(img, "image/png");
//   await pageFixture.page.close();
//   await context.close();
// })

// AfterAll(async () => {
  
//   await pageFixture.page.close();
//   await browser.close();
// });

export { page }; //comm for commit 
