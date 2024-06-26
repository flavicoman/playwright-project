import { Page, Locator } from "@playwright/test";
import { HomePage } from "./homePage.page";
import generateRandomNumber from "../utils/generaterandomNumber";
import { expect } from "@playwright/test";
import generateRandomName from "../utils/generateRandomName";
import { faker } from "@faker-js/faker";

export class membData extends HomePage {
    private plus: Locator = this.page.locator("svg[data-icon=plus]")
    public nameInput: Locator = this.page.locator(".plans-modal-section-container input")
    private dropDownBGroup: Locator = this.page.locator("div.select.mb-4 .dropdown-arrow")
    private bookingGroupInput: Locator = this.page.locator("div.select.mb-4 .text-displayFive input")
    private expireHoursCheckbox: Locator = this.page.locator(".expirations-container > div:nth-child(1) .checkbox-input")
    private expireTimeCheckbox: Locator = this.page.locator(".expirations-container > div:nth-child(2) .checkbox-input")
    private maxHoursOfPlayInput: Locator = this.page.locator(".expirations-container > div:nth-child(1) .input")
    private durationMonthsInput: Locator = this.page.locator(".expirations-container > div:nth-child(2) .input")
    private dropdownSubPlan: Locator = this.page.locator(".select.mb-20 .dropdown-arrow")
    private subscriptionPlanInput: Locator = this.page.locator(".new-plan-modal-container > div:nth-child(7) input")
    private cursorPointer: Locator = this.page.locator(".table-row.undefined:nth-child(1) .cursor-pointer")
    private editOption: Locator = this.page.locator(".dropdown-menu .dropdown-menu-item:nth-of-type(1)")
    private saveButton: Locator = this.page.locator(".new-plan-modal-container .standard-button")
    private deleteButton: Locator = this.page.locator(".dropdown-menu-item.undefined.danger")
    private deletePopUp = this.page.locator(".text-displayTwo.text-UIColors-darkAlert")
    private continueButton: Locator = this.page.locator(".standard-button.outlined-dialog.regular")
    private settingsTab: Locator = this.page.locator("div.small-format-item>>nth=2")
    private membershiSettingsTab: Locator = this.page.locator(".settings-menu-item:nth-child(4)")
    private membershipValueInput: Locator = this.page.locator('.input')
    private saveMembershipDataButton: Locator = this.page.locator(".standard-button:nth-child(2)")


    constructor(page: Page) {
        super(page);

    }
    value = generateRandomNumber()
    name = faker.person.fullName();
    public async gotoMembershipSettings() {
        await this.settingsTab.click();
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.membershiSettingsTab.click();
    }
    public async selectMMAInputBox() {
        await this.page.getByText('Maximum Memberships Allowed').click();
    }
    public async addMembershipsValue() {
        await this.membershipValueInput.clear()
        await this.membershipValueInput.type(this.value)
    }

    public async checkAddedValue() {
        const inputValue = await this.membershipValueInput.inputValue();
        await expect(inputValue).toContain(this.value);
    }

    public async clickPlusSign() {
        await this.plus.click();
    }

    public async addNewName() {
        await this.nameInput.type(this.name)
    }

    public async selectBookingGroup() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.dropDownBGroup.click();
       await this.bookingGroupInput.fill("1 T")
        await this.page.keyboard.press('Enter');
    }

    public async addMaxHours() {
        await this.expireHoursCheckbox.check()
        await this.maxHoursOfPlayInput.type(this.value)
    }

    public async addMonthsDuration() {
        await this.expireTimeCheckbox.check()
       
        await this.durationMonthsInput.clear();
        await this.durationMonthsInput.type(this.value);
    }

    public async selectSubscriptionPlan() {
        await this.dropdownSubPlan.click()
        await this.subscriptionPlanInput.type("None", { timeout: 4000 });
        await this.page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 4000));
    }

    public async checkAddedMembershipPlan() {
        await expect(this.page.waitForSelector(`text=${this.name}`)).not.toBeNull()
    }

    public async clickSavebutton() {
        await this.saveButton.click({ timeout: 10000 })
    }

    public async checkSaveMembershipDataButton() {
        await expect(this.saveMembershipDataButton).toBeEnabled()
    }

    public async selectEditOption() {
        await this.cursorPointer.click()
        await this.editOption.click();
    }

    public async selectDotsSymbol() {
        await this.cursorPointer.click()

    }
    public async selectDeleteOption() {
        await this.deleteButton.click({ timeout: 3000 });
    }

    public async checkDeleteMPopUp() {
         await expect(await this.deletePopUp).toBeVisible()
    }

    public async clickContinue() {
        await this.continueButton.click()
    }

    public async checkDeletedMembership() {
    }
}