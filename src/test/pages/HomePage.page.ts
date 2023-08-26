import { Page } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";

export class HomePage {

    private page: Page; 
    constructor(page: Page) {
        this.page = page;
    }

    public async verifySignIn ()
     { 
        await new Promise(resolve => setTimeout(resolve, 2000));
         //console.log("hello")
        await pageFixture.page.waitForSelector("div.header-container", { timeout: 10000 }); // Increase timeout to 10 seconds
        const elementText = await pageFixture.page.locator("p:has-text('Coman')").textContent();
        console.log(elementText); // Log the text content t
     }

     public async clickArrowBtn () {
         const elsvg = document.getElementById('svg-inline--fa fa-chevron-down fa-lg cursor-pointer');
         if (elsvg && elsvg.getAttribute('aria-hidden') === 'true') {
            elsvg.setAttribute('aria-hidden', 'false');
            elsvg.click();
        }
     }

     public async logOut (){
        const el = await this.page.locator("li.dropdown-menu-item undefined");
        await el.click();
     }

     public async confirmLogOut() {
        
     }
  
    public async goToMembersPage(){
        const el = await this.page.locator("(//button[@type='button'])[2]");
        await el.click();
    }

    public async goToSettingsPage(){
        const el = await this.page.locator("(//button[@type='button'])[3]");
        await el.click();
    }





}