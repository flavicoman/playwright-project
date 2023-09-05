import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { HomePage } from "./HomePage.page";
import generateRandomName from "../utils/generateRandomName";
import generateRandomPhoneNumber from "../utils/generateRandomPhoneNumber";
import generateRandomEmail from "../utils/generateRandomEmail";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";


export class MembersPage extends HomePage {
    private plus: Locator = this.page.locator("svg[data-icon=plus]")
    public firstNameInput: Locator = this.page.locator(".input-fields-container:nth-child(2) .input-container:nth-child(1) input")
    public lastNameInput: Locator = this.page.locator(".input-fields-container:nth-child(2) .input-container:nth-child(2) input")
    public phoneNumberInput: Locator = this.page.locator(".input-fields-container:nth-child(4) .input-container:nth-child(2) input")
    public emailInput: Locator = this.page.locator(".input-fields-container:nth-child(4) .input-container:nth-child(1) input ");
    private saveButton: Locator = this.page.locator('button', { hasText: 'Save' })
    private membershipSelector: Locator = this.page.locator("div.dropdown-arrow.css-1xc3v61-indicatorContainer")

    constructor(page: Page) {
        super(page);

    }
    name = faker.person.firstName()
    public async clickPlusSign() {
        await this.plus.click();
    }

    public async addFirstName() {
        await this.firstNameInput.fill(this.name);
    }

    public async addLastName() {
        await this.lastNameInput.fill(faker.person.firstName())
    }

    public async addPhoneNumber() {
        this.phoneNumberInput.click();
        this.phoneNumberInput.type(faker.phone.number('004######'))
    }

    public async addEmail() {
        this.emailInput.fill(generateRandomEmail());
        await new Promise(resolve => setTimeout(resolve, 4000));
    }

    public async clickSaveButton() {
        await this.saveButton.click();

        await new Promise(resolve => setTimeout(resolve, 4000));

    }
    public async addDate() {

    }

    public async selectMembership() {
        this.membershipSelector.click()
    }

    public async checkAddedMember() {

        const element = await this.page.waitForSelector(`text=${this.name}`);
        expect(element).not.toBeNull();

    }

    public async goToCustomerPage() {

        await this.page.getByRole('button', { name: 'Customers' }).click()

    }

    public async addInvalidName() {
        await this.firstNameInput.fill("   ");
        await this.lastNameInput.fill("   ")
    }

    public async checkSaveBtn() {
        await expect(await this.page.locator(`button[type='submit']`).isEnabled()).toBe(false)
    }

    public async addInvalidEmail(){
         await this.emailInput.fill("   ")
    }

    public async addInvalidPhoneNumber() {
        await this.phoneNumberInput.fill(" ")
    }


}
