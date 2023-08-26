import { Page } from "@playwright/test";

export  class LoginPage { 

    private page: Page ;
    constructor(page: Page) {
        this.page = page;
    }
   //methods used 
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
}
