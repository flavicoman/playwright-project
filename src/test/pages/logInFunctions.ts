import { browserFunctions } from "./BasePage.page";
import { pageFixture } from "../setup/pageFixture";
import { Locator, Page } from "@playwright/test";
export class logInFunctions extends browserFunctions {
    signInButton : Locator;
    super (page: Page) {
        
        this.signInButton = page.locator("button[type='submit']");  
    }
   
    async signIn () {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.signInButton.click();
        console.log("signin")
    };
    async loginSucces () {
        await new Promise(resolve => setTimeout(resolve, 2000));
         console.log("hello")
        await pageFixture.page.waitForSelector("#scrollableDiv > div", { timeout: 10000 }); // Increase timeout to 10 seconds
        const elementText = await pageFixture.page.locator("p:has-text('Coman')").textContent();
        console.log(elementText); // Log the text content to the console

        // const text = await pageFixture.page.locator("p:has-text('Coman')").textContent();
    // console.log("Text found:", text);
    // return text; // Return the text for further use if needed 
    }
}


