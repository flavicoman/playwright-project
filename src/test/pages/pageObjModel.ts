import { expect, Locator, Page } from '@playwright/test';
import { pageFixture } from "../setup/pageFixture";
``
export class BrowserFunctions {
    //readonly url  = "https://tqgolfdev.b2clogin.com/tqgolfdev.onmicrosoft.com/b2c_1_signin/oauth2/v2.0/authorize?client_id=47fc16c2-f3e8-4dfc-91e3-8df8394a0f6a&scope=https%3A%2F%2Ftqgolfdev.onmicrosoft.com%2FWebApi%2FApiAccess%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fdev.registrygolf.com&client-request-id=da720c38-4811-4c1d-b86c-5a01270219a6&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.36.0&client_info=1&code_challenge=-SK9j7_tZUFmmX3LeN6RpUD4N7QqD6p_2LHtblhoLb0&code_challenge_method=S256&nonce=6901f121-46e4-4236-acd9-8756b3a92f97&state=eyJpZCI6ImNlY2JhZDZkLTBjYmEtNDk4YS05ZWRjLTg3YWIyY2VkOTY1NCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D"
     readonly page : Page
     readonly usernameInput : Locator; 
     readonly passwordInput : Locator; 
     readonly signInButton : Locator;
     readonly arrowButton : Locator; 
     readonly logOutButton : Locator ; 
     readonly confirmButton : Locator ; 
    

     
    constructor(page : Page) {
       // this.url = url;
        this.page = page; 
        this.usernameInput = page.locator("input[placeholder='Email Address']");
        this.passwordInput = page.locator("input[placeholder='Password']");
        this.signInButton = page.locator("button[type='submit']");
        this.arrowButton = page.locator("#root > div.layout > div.header > div > div.avatar > svg");
        this.logOutButton = page.locator("#root > div.layout > div.header > div > div.avatar > ul > li");
        this.confirmButton = page.locator("#headlessui-dialog-\:r2\: > div > div.relative.inline-block.align-bottom.bg-white.p-6.rounded-lg.text-left.shadow-xl.transform.transition-all.w-full.sm\:w-fit.sm\:my-8.sm\:align-middle > div > div > div.buttons-row > button.standard-button.outlined-dialog.regular")
    }

    public async goto() {
        await this.page.goto("https://tqgolfdev.b2clogin.com/tqgolfdev.onmicrosoft.com/b2c_1_signin/oauth2/v2.0/authorize?client_id=47fc16c2-f3e8-4dfc-91e3-8df8394a0f6a&scope=https%3A%2F%2Ftqgolfdev.onmicrosoft.com%2FWebApi%2FApiAccess%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fdev.registrygolf.com&client-request-id=da720c38-4811-4c1d-b86c-5a01270219a6&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.36.0&client_info=1&code_challenge=-SK9j7_tZUFmmX3LeN6RpUD4N7QqD6p_2LHtblhoLb0&code_challenge_method=S256&nonce=6901f121-46e4-4236-acd9-8756b3a92f97&state=eyJpZCI6ImNlY2JhZDZkLTBjYmEtNDk4YS05ZWRjLTg3YWIyY2VkOTY1NCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D");
    }

    async enterUsername (username : string) {
        await this.usernameInput.type(username)
    }

    async enterPassword (password : string) { 
        await this.passwordInput.type(password);
    }
    
    async signIn () {
        await this.signInButton.click();
    }
    async logInSucces () {
        const text = await pageFixture.page.locator("p:has-text('Coman')").textContent();
        console.log(text);
    }
    async clickArrowBtn () {
        await this.arrowButton.click();
    }

    async logout () {
        await this.logOutButton.click();
        console.log("clicked logout button");
    }
    
    async confirmLogout() {
     
        await this.confirmButton.click();
    }
}