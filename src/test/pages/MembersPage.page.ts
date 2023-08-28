import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { HomePage } from "./homePage.page";
import generateRandomName from "../utils/generateRandomName";



export class MembersPage extends HomePage {
    private plus : Locator = this.page.locator("svg.svg-inline--fa.fa-plus.fa-xl ")
    private firstNameInput : Locator = this.page.getByText("First Name")
    constructor(page:Page) {
        super(page);
    }

   public async clickPlusSign () {
     await this.plus.click();
   }

    public async addFirstName ()
    {     
        const name =  generateRandomName();
        await this.page.getByText("First Name").click();
        await this.page.getByLabel(".label.translate-y-3").fill(name);
        //this.firstNameInput.click();
        //this.firstNameInput.fill(name);
    }
}
