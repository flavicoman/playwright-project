import { Page, Locator } from "@playwright/test";
import { faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
import { HomePage } from "./HomePage.page";
import generateRandomRateName from "../utils/generateRandomRateName";
import generateRandomNumber from "../utils/generaterandomNumber";
import { expect } from "@playwright/test";
import generateRandomName from "../utils/generateRandomName";

const name = faker.person.fullName();
export class PointSales extends HomePage {
    public pointOfSale: Locator = this.page.locator(" ")
    private rateNameInput: Locator = this.page.locator(".name-container input")
    private feeInput: Locator = this.page.locator(".rates-modal-section-container:nth-child(2) input")
    private glCodeInput = this.page.locator(".rates-modal-section-container:last-child div:nth-child(3) input")
    private categoryInput = this.page.locator(".rates-modal-section-container:last-child div:nth-child(2) input")
    private threeDotsButton = this.page.locator(".table-row.undefined:nth-child(1) .cursor-pointer")
    private editOption = this.page.locator(".dropdown-menu-item:nth-child(2)")
    private deleteOption = this.page.locator(".dropdown-menu-item.undefined.danger")
    private continueButton = this.page.locator(".buttons-row .standard-button")
    private confirmationDialog = this.page.locator(".confirmation-dialog-container")
    private requirePaymentCheckbox = this.page.locator(".checkbox-input")

    fee = generateRandomNumber();

    constructor(page: Page) {
        super(page);

    }

    public async goToPointOfSale() {
        await this.page.locator("div.small-format-item>>nth=2").click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.page.locator(".settings-menu-item:nth-child(5)").click();
    }

    public async addNewRateName() {
        await this.rateNameInput.clear()
        await this.rateNameInput.type(name);
        await new Promise(resolve => setTimeout(resolve, 2000));

    }

    public async addFee() {
        await this.feeInput.fill(this.fee);
    }

    public async addCategory() {
        await this.categoryInput.fill("cat123")
    }

    public async addGLCode() {
        await this.glCodeInput.fill(this.fee)
    }

    public async checkAddedrate() {
        await new Promise(resolve => setTimeout(resolve, 5000));
        expect(this.page.locator(".pointOfSale-container")).toContainText(name);
    }



    public async selectThreeDots() {
        const threeDotsButton = this.page.locator(".cursor-pointer")
        const tableRow = this.page.locator('tbody tr').filter({ hasText: name });
        await tableRow.locator(threeDotsButton).click();
    }

    public async selectEditOption() {
        await this.editOption.click();
    }

    public async checkEditedRate() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        expect(this.page.locator(".pointOfSale-container")).toContainText(name);
    }

    public async selectDeleteOption() {
        await this.deleteOption.click()
    }

    public async checkDeleteOptWindow() {
        await expect(this.confirmationDialog).toBeVisible()
    }

    public async clickContinue() {
        await this.continueButton.click();
    }

    public async checkDeletedRate() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        expect(this.page.locator(".pointOfSale-container")).not.toContainText(name);
    }

    public async requirePayment() {
        await this.requirePaymentCheckbox.click()
    }

    public async checkRPBox() {
        expect(this.page.locator(".confirmation-dialog-container")).toBeVisible();
    }

    public async verifyEnabledCheckbox() {
        await expect(this.requirePaymentCheckbox).toBeChecked();
    }
}


