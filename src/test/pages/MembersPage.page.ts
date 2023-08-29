import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { HomePage } from "./HomePage.page";
import generateRandomName from "../utils/generateRandomName";
import generateRandomPhoneNumber from "../utils/generateRandomPhoneNumber";
import generateRandomEmail from "../utils/generateRandomEmail";




export class MembersPage extends HomePage {
    private plus : Locator = this.page.locator("svg.svg-inline--fa.fa-plus.fa-xl ")
    private firstNameInput : Locator = this.page.locator(".input-fields-container:nth-child(2) .input-container:nth-child(1) input")
    private lastNameInput : Locator = this.page.locator(".input-fields-container:nth-child(2) .input-container:nth-child(2) input")
    private phoneNumberInput : Locator = this.page.locator(".input-fields-container:nth-child(4) .input-container:nth-child(2) input")
    private emailInput : Locator = this.page.locator(".input-fields-container:nth-child(4) .input-container:nth-child(1) input ");
    constructor(page:Page) {
        super(page);
    }

   public async clickPlusSign () {
     await this.plus.click();
   }

    public async addFirstName ()
    {     
        await this.firstNameInput.fill(generateRandomName());
        
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
    }

    public async addDate(){

    }

    public async selectMembership(){

    }
   public async checkAddedMember() { 

   }

}
