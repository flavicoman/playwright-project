import { Page } from "@playwright/test";
import expect from "expect";
import { Locator } from "@playwright/test";
import { page } from "../setup/hooks";

export class LoginPage {

    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    public async enterUser(email: string) {

        const ele = await this.page.locator("input[type='email']");
        await ele?.type(email);
    }

    public async enterPass(pass: string) {
        const ele = await this.page.locator("input[type='password']");
        await ele?.type(pass);

    }
    public async clickLoginBtn() {
        const ele = await this.page.locator("button[type='submit']");
        await ele.click({ timeout: 10000 });
    }

    public async checkLoginDenial() {
        await expect(await this.page.locator(".entry-item:first-child .error").isVisible()).toBe(true)
    }

    public async checkWrongPassNotification() {
        await expect(await this.page.locator(".error.pageLevel").isVisible()).toBe(true);
    }
}
