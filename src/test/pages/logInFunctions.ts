import { browserFunctions } from "./browserFunctions";
import { pageFixture } from "../setup/pageFixture";

export class logInFunctions extends browserFunctions {
   
   
    async signIn () {
        await this.signInButton.click();
        console.log("signin")
    }
    public async logInSucces () {
        console.log("hello")
        await pageFixture.page.locator("p:has-text('Coman')").textContent();  
    }
}


