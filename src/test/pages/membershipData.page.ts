import { Page } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { HomePage } from "./HomePage.page";
import generateRandomPhoneNumber from "../utils/generateRandomPhoneNumber";

export class membData extends HomePage {

    constructor(page:Page) {
        super(page);
        
    }
     
    public async gotoMembershipSettings () {
        await this.page.locator("div.small-format-item>>nth=2").click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.page.locator(".settings-menu-item:nth-child(4)").click();
        
     
    }
    public async selectMMAInputBox(){
        await this.page.getByText('Maximum Memberships Allowed').click();
    }
    public async addMembershipsValue () {
        await this.page.locator('.input').clear()
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.page.locator('.input').type('145')

        
    }
    
}