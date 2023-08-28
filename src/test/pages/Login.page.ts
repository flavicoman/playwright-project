import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";

export  class LoginPage  { 
    
     page: Page ;
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
        await ele.click({ timeout: 10000 });
  
    }
}
