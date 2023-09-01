import { MembersPage } from "./membersPage.page";
import { Page, Locator } from "@playwright/test";
import { test, expect } from '@playwright/test';
import generateRandomPhoneNumber from "../utils/generateRandomPhoneNumber";



export class CustomerPage extends MembersPage {

    constructor(page: Page) {
        super(page);

    }

    firstNameInput: Locator = this.page.locator(`.input-container.undefined:nth-child(1) input`)
    lastNameInput: Locator = this.page.locator(`.input-container.undefined:nth-child(2) input`)
    emailInput: Locator = this.page.locator(`.input-container.undefined:nth-child(3) input`)
    phoneNumberInput: Locator = this.page.locator(".input-container.mb-60 input")

    public async addInvalidName() {
        await this.firstNameInput.fill("   ");
        await new Promise(resolve => setTimeout(resolve, 4000));
        await this.lastNameInput.fill("   ");
    }

    public async addInvalidPhoneNumber() {
        await this.phoneNumberInput.type(generateRandomPhoneNumber() + "e")
    }

    public async addInvalidEmail() {

    }

    public async checkSaveButtonAvailability() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await expect(this.page.locator(`button[type='submit']`)).toBeDisabled({ timeout: 10000 });
    }

    public async checkAddedCustomer() {
        await expect(this.page.waitForSelector(`text=${this.name}`)).not.toBeNull();
    }

    public async selectCustomer(customer: string) {

        await this.page.getByText('aanh aanh').click();


    }

}



