import { MembersPage } from "./MembersPage.page";
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
    membershipSpan: Locator = this.page.locator(".details-option:nth-child(2)")
    addMembershipButton: Locator = this.page.locator(".large.mb-5")
    membershipPlanInput: Locator = this.page.locator(".text-displayFive:nth-child(1) input")
    currentMembershipLocator: Locator = this.page.locator(".current-membership-name")
    membersTab: Locator = this.page.locator(".members-page button:nth-child(1)")

    membershipPlanName: string = "Advanced"
    customerName = "aanh aanh"
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
        await this.page.getByText(this.customerName).click();
    }

    public async checkCustomerDetailWindow() {
        await expect(this.page.locator(".card.member-details-container")).toBeInViewport()
    }

    public async goToAddMembership() {
        await this.membershipSpan.click()
    }

    public async addMembership() {
        this.addMembershipButton.click()
    }
    public async addMembershipPlan() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.membershipPlanInput.type(this.membershipPlanName);
        this.page.keyboard.press('Enter');
    }

    public async assertAddedMembership() {
        await expect(this.currentMembershipLocator).toContainText(this.membershipPlanName);
        await this.page.locator(".fa-xmark").click()
    }

    public async checkAddedMembership() {
        //await expect(this.membersTab).toBeVisible();
        await this.membersTab.click();
        await new Promise(resolve => setTimeout(resolve, 25000));
        await expect(this.page.waitForSelector(`text=${this.customerName}`)).not.toBeNull();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }


}



