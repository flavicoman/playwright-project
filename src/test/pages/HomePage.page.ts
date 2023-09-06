import { Page } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { Locator } from "@playwright/test";
import { page } from "../setup/hooks";



export class HomePage {

    constructor(page: Page) {
        this.page = page;
    }
    public page: Page;




    public async verifySignIn() {
        await pageFixture.page.waitForSelector("div.header-container", { timeout: 10000 }); // Increase timeout to 10 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    public async clickArrowBtn() {
        // const el = await this.page.locator("svg.svg-inline--fa.fa-chevron-down.fa-lg.cursor-pointer");
        // const el = await this.page.locator(signInButton);
       // await signInButton.click();
    }

    public async logOut() {
        const el = await this.page.locator("li.dropdown-menu-item.undefined");
        await el.isEnabled();
        await new Promise(resolve => setTimeout(resolve, 10000));
        await el.click;
    }

    public async confirmLogOut() {
        const el = await this.page.locator("(//button[@type='button'])[2]");
        await el.click();
    }

    public async goToMembersPage() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.locator("div.small-format-item>>nth=1").click();
    }

    public async goToSettingsPage() {
        const el = await this.page.locator("div.small-format-item>>nth=2");
        await el.click();
    }

    public async goToDesiredPage(desiredPage: Locator) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.locator(desiredPage.toString()).click();
    }
}