import { browserFunctions } from "./browserFunctions";
import { Locator, Page } from "@playwright/test";

export class logOutFunction extends browserFunctions {
    arrowButton : Locator; 
    logOutButton : Locator ; 
    confirmButton : Locator ; 
   super(page : Page) {
       this.arrowButton = page.locator("#root > div.layout > div.header > div > div.avatar > svg");
        this.logOutButton = page.locator("#root > div.layout > div.header > div > div.avatar > ul > li");
        this.confirmButton = page.locator("#headlessui-dialog-\:r2\: > div > div.relative.inline-block.align-bottom.bg-white.p-6.rounded-lg.text-left.shadow-xl.transform.transition-all.w-full.sm\:w-fit.sm\:my-8.sm\:align-middle > div > div > div.buttons-row > button.standard-button.outlined-dialog.regular")
    }
   
   async clickArrowBtn () {
       await this.arrowButton.click();
   }

   async logout () {
       await this.logOutButton.click();
       
   }
   
   async confirmLogout() {
    
       await this.confirmButton.click();
   }
}