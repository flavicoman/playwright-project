import { Page } from "@playwright/test";

export  class Login { 

    private page: Page ;
    constructor(page: Page) {
        this.page = page;
    }
    public get eleEmailtextField() {
        return this.page.$("input[name='email'")
    }
    public get elePassTextField() {
        return this.page.$("input[name='password']")
    }
    public get eleLginBtn() {
        return this.page.$("button[type='submit']")
    }

    public async enterUserName(name: string) {
        const ele = await this.eleEmailtextField;
        await ele?.fill(name);
    }
    
    public async enterPass(pass: string) {
        const ele = await this.elePassTextField;
        await ele?.fill(pass);
    }
    public async clickLoginBtn() {
        const ele = await this.eleLginBtn;
        await ele.click();
    }
}