import { Page } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { Locator } from "@playwright/test";
import { expect } from "@playwright/test";

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
        const arrowButton = await this.page.locator(".fa-lg.cursor-pointer");
        await arrowButton.click()
    }

    public async checkLogOutOption() {
        await this.page.locator(".logout-dropdown").isVisible()
    }

    public async logOut() {
        const logOutDropdown = await this.page.locator("li.dropdown-menu-item.undefined");
        await logOutDropdown.isEnabled();
        await logOutDropdown.click();
    }

    public async confirmLogOut() {
        const confirmDialogue = await this.page.locator(".outlined-dialog");
        await confirmDialogue.click();
        await expect(this.page.locator(".container.unified_container")).toBeVisible({ timeout: 10000 })
    }

    public async goToMembersPage() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.locator("div.small-format-item>>nth=1").click();
    }

    public async goToSettingsPage() {
        const settingsPageButton = await this.page.locator("div.small-format-item>>nth=2");
        await settingsPageButton.click();
    }

    public async goToDesiredPage(desiredPage: Locator) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.page.locator(desiredPage.toString()).click();
    }
}