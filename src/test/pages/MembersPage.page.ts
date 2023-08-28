import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { HomePage } from "./HomePage.page";
import generateRandomName from "../utils/generateRandomName";
import generateRandomPhoneNumber from "../utils/generateRandomPhoneNumber";




export class MembersPage extends HomePage {
    private plus : Locator = this.page.locator("svg.svg-inline--fa.fa-plus.fa-xl ")
    private firstNameInput : Locator = this.page.getByText("First Name")
    private lastNameInput : Locator = this.page.getByText("Last Name")
    private phoneNumberInput : Locator = this.page.locator("")
    constructor(page:Page) {
        super(page);
    }

   public async clickPlusSign () {
     await this.plus.click();
   }

    public async addFirstName ()
    {     
        const name =  generateRandomName();
        await this.page.getByText("(//span[text()='New Member']/following::input)[1]").click();
        await this.page.getByLabel("(//span[text()='New Member']/following::input)[1]").fill("adc");
        this.firstNameInput.click();
        this.firstNameInput.fill(name);
    }

    public async addLastName(){
       const lastName = generateRandomName();
       this.lastNameInput.click();
       this.lastNameInput.fill(lastName)
    }

    public async addPhoneNumber(){
         const number = generateRandomPhoneNumber();
         this.phoneNumberInput.click();
         this.phoneNumberInput.fill(number);
    }

    public async addEmail(){

    }

    public async addDate(){

    }

    public async selectMembership(){

    }
   public async checkAddedMember() { 
    
   }

}
