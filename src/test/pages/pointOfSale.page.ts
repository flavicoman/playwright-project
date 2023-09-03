import { Page, Locator } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { HomePage } from "./HomePage.page";
import generateRandomName from "../utils/generateRandomName";
import generateRandomNumber from "../utils/generaterandomNumber";
import { expect } from "@playwright/test";

export class PointSales extends HomePage {
    public pointOfSale: Locator = this.page.locator(" ")
    private rateNameInput: Locator = this.page.locator(".name-container input")
    private feeInput: Locator = this.page.locator(".rates-modal-section-container:nth-child(2) input")
    private glCodeInput = this.page.locator(".rates-modal-section-container:last-child div:nth-child(3) input")
    private categoryInput = this.page.locator(".rates-modal-section-container:last-child div:nth-child(2) input")
    private threeDotsButton = this.page.locator(".table-row.undefined:nth-child(1) .cursor-pointer")
    private editOption = this.page.locator(".dropdown-menu-item:nth-child(2)")
    
    name = generateRandomName();
    newName = generateRandomName();
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
        await this.rateNameInput.type(this.name);
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
        expect(this.page.locator(".pointOfSale-container")).toContainText(this.name);
    }


    public async selectThreeDots() {
        await this.threeDotsButton.click()
       
        
    }
    public async selectEditOption() {
       await this.editOption.click();
    }

    public async checkEditedRate() {

    }
}   
