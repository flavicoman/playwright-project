import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
export class LoginPage {

    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    public async enterUser(email: string) {
        await this.page.locator("input[type='email']")?.type(email);
    }

    public async enterPass(pass: string) {
        await this.page.locator("input[type='password']")?.type(pass);
    }

    public async clickLoginBtn() {
        await this.page.locator("button[type='submit']").click();
    }

    public async checkLoginDenial() {

        await expect(await this.page.locator(".entry-item:first-child .error").isVisible({ timeout: 5000 })).toBe(true)
    }

    public async checkWrongPassNotification() {
        await expect(this.page.locator('.error.pageLevel')).toBeVisible({ timeout: 15000 })
    }

    public async clickArrowButton() {
        await this.page.locator(".fa-chevron-down").click()
    }

    public async checkLogoutMenu() {
        await expect(await this.page.locator(".logout-dropdown").isVisible()).toBe(true)
    }

    public async clickLogoutButton() {
        await this.page.locator(".dropdown-menu-item").click({ timeout: 5000 })
    }
}
