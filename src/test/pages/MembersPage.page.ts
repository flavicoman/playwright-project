import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { HomePage } from "./HomePage.page";
import generateRandomName from "../utils/generateRandomName";
import generateRandomPhoneNumber from "../utils/generateRandomPhoneNumber";
import generateRandomEmail from "../utils/generateRandomEmail";
import { expect } from "@playwright/test";



export class MembersPage extends HomePage {
    private plus : Locator = this.page.locator("svg[data-icon=plus]")
    public firstNameInput : Locator = this.page.locator(".input-fields-container:nth-child(2) .input-container:nth-child(1) input")
    public lastNameInput : Locator = this.page.locator(".input-fields-container:nth-child(2) .input-container:nth-child(2) input")
    public phoneNumberInput : Locator = this.page.locator(".input-fields-container:nth-child(4) .input-container:nth-child(2) input")
    public emailInput : Locator = this.page.locator(".input-fields-container:nth-child(4) .input-container:nth-child(1) input ");
    private saveButton : Locator = this.page.locator('button', { hasText: 'Save' })
    private membershipSelector : Locator = this.page.locator("div.dropdown-arrow.css-1xc3v61-indicatorContainer")
   
    constructor(page:Page) {
        super(page);
        
    }
    name : string = generateRandomName();
    public async clickPlusSign () {
     await this.plus.click();
   }

    public async addFirstName ()
    {    
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
    
      await new Promise(resolve => setTimeout(resolve, 4000));

   }
    public async addDate(){
       
    }

    public async selectMembership(){
        this.membershipSelector.click()
    }

   public async checkAddedMember() { 
      
       const element = await this.page.waitForSelector(`text=${this.name}`);
       expect(element).not.toBeNull(); 

   }

    public async goToCustomerPage(){
       
     await this.page.getByRole('button', { name: 'Customers' }).click()
     
    }
}
