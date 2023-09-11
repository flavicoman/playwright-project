import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
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
        await ele.click();
    }

    public async checkLoginDenial() {
      
        await expect(await this.page.locator(".entry-item:first-child .error").isVisible({ timeout: 5000 })).toBe(true)
    }
    
    public async checkWrongPassNotification() {
       
     
        await expect(this.page.getByText('.error.pageLevel')).toBeVisible()
      
    }

    public async clickArrowButton() {
        await this.page.locator(".fa-chevron-down").click()
    }

    public async checkLogoutMenu() {
        await expect(await this.page.locator(".logout-dropdown").isVisible()).toBe(true)
    }

    public async clickLogoutButton() {
        await this.page.locator(".dropdown-menu-item").click()
    }
    







}
