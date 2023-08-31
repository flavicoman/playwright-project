import { Page } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { HomePage } from "./HomePage.page";

export class SettingsPage extends HomePage {
    
    constructor(page:Page) {
        super(page);
        
    }

    public async checkSettingsPage(){
        await pageFixture.page.waitForSelector("div.settings-menu", { timeout: 10000 }); // Increase timeout to 10 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
        const elementText = await pageFixture.page.locator("p:has-text('General Settings')").textContent();
        console.log(elementText); // Log the text content t
    }
}

