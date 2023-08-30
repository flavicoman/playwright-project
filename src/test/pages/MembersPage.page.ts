import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { HomePage } from "./HomePage.page";
import generateRandomName from "../utils/generateRandomName";
import generateRandomPhoneNumber from "../utils/generateRandomPhoneNumber";
import generateRandomEmail from "../utils/generateRandomEmail";
import { expect } from "@playwright/test";



export class MembersPage extends HomePage {
    private plus : Locator = this.page.locator("svg[data-icon=plus]")
    private firstNameInput : Locator = this.page.locator(".input-fields-container:nth-child(2) .input-container:nth-child(1) input")
    private lastNameInput : Locator = this.page.locator(".input-fields-container:nth-child(2) .input-container:nth-child(2) input")
    private phoneNumberInput : Locator = this.page.locator(".input-fields-container:nth-child(4) .input-container:nth-child(2) input")
    private emailInput : Locator = this.page.locator(".input-fields-container:nth-child(4) .input-container:nth-child(1) input ");
    private saveButton : Locator = this.page.locator('button', { hasText: 'Save' })
    
    constructor(page:Page) {
        super(page);
        
    }
    name : string = generateRandomName();
    public async clickPlusSign () {
     await this.plus.click();
   }

    public async addFirstName ()
    {    
         // const name = generateRandomName();
        await this.firstNameInput.fill(this.name);
        
    }

    public async addLastName(){
       await this.lastNameInput.fill(generateRandomName())
    }

    public async addPhoneNumber(){
         this.phoneNumberInput.click();
         this.phoneNumberInput.type(generateRandomPhoneNumber())
    }

    public async addEmail(){
          this.emailInput.fill(generateRandomEmail());
          await new Promise(resolve => setTimeout(resolve, 4000));
    }
    
   public async clickSaveButton(){
      await  this.saveButton.click();
      //await this.page.locator('button', { hasText: 'Save' }).click();
      await new Promise(resolve => setTimeout(resolve, 4000));

   }
    public async addDate(){

    }

    public async selectMembership(){

    }

   public async checkAddedMember() { 
      // const elLocator = this.page.locator('td', { hasText:'' })
       const element = await this.page.waitForSelector(`text=${this.name}`);
       expect(element).not.toBeNull(); // Assert that the element is found

   }

}
