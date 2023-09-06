import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { HomePage } from "./HomePage.page";
import generateRandomName from "../utils/generateRandomName";
import generateRandomPhoneNumber from "../utils/generateRandomPhoneNumber";
import generateRandomEmail from "../utils/generateRandomEmail";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";


export class MembersPage extends HomePage {
    public customersTab: Locator = this.page.locator(".tab-group > button:nth-child(2)")
  
    private plus: Locator = this.page.locator("svg[data-icon=plus]")
    public firstNameInput: Locator = this.page.locator(".input-fields-container:nth-child(2) .input-container:nth-child(1) input")
    public lastNameInput: Locator = this.page.locator(".input-fields-container:nth-child(2) .input-container:nth-child(2) input")
    public phoneNumberInput: Locator = this.page.locator(".input-fields-container:nth-child(4) .input-container:nth-child(2) input")
    public emailInput: Locator = this.page.locator(".input-fields-container:nth-child(4) .input-container:nth-child(1) input ");
    private saveButton: Locator = this.page.locator('button', { hasText: 'Save' })
    private membershipSelector: Locator = this.page.locator("div.dropdown-arrow.css-1xc3v61-indicatorContainer")

    private accountNameInput: Locator = this.page.locator(".account-container > div:nth-child(2) input")
    private accountLastNameInput: Locator = this.page.locator(".account-container > div:nth-child(3) input")
    private accountPhoneInput: Locator = this.page.locator(".account-container > div:last-child input")

    private membersCard: Locator = this.page.locator(".card.member-details-container")
    private membershipButton: Locator = this.page.locator(".details-navigation .details-option:nth-child(2)")
    private threeDots: Locator = this.page.locator(".cursor-pointer:first-child")
    private deactivateOption: Locator = this.page.locator(".dropdown-menu .dropdown-menu-item.undefined.danger")
    private deactivateButton: Locator = this.page.locator(".form-container button:first-child")
    private optionsFeature: Locator = this.page.locator(".dropdown-menu.left-0")
    private edtiMembershipButton: Locator = this.page.locator(".dropdown-menu .dropdown-menu-item.undefined:first-child")
    private membershipInput: Locator = this.page.locator(".form-container > div:nth-child(2) input ")
    private startDateInput: Locator = this.page.locator(".form-container > div:nth-child(3) input ")
    private membershipContainer: Locator = this.page.locator(".current-membership-name")
    private calendarButton: Locator = this.page.locator(".fa-calendar-day")
    private calendarArrow: Locator = this.page.locator("button .fa-arrow-right")
    private calendarDay: Locator = this.page.locator(".react-datepicker__day.react-datepicker__day--018")
    private membershipHistoryRow : Locator = this.page.locator(".card table .table-row.undefined:first-child")

    constructor(page: Page) {
        super(page);
    }

    name = faker.person.firstName()
    memberName = faker.person.firstName()
    membershipPlan = "abcas"

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
        await expect(await this.saveButton.isEnabled()).toBe(false)
    }

    public async addInvalidEmail() {
        await this.emailInput.fill("   ")
    }

    public async addInvalidPhoneNumber() {
        await this.phoneNumberInput.fill(" ")
    }

    public async selectDesiredMember(name: string) {
        const tableRow = this.page.locator('tbody tr').filter({ hasText: name });
        await tableRow.click()
    }

    public async addAccountName() {
        await this.accountNameInput.clear()
        await this.accountNameInput.fill(this.memberName)
    }

    public async addAccountLastName() {
        await this.accountLastNameInput.clear()
        await this.accountLastNameInput.fill(faker.person.lastName())
    }

    public async addAccountPhoneNumber() {
        await this.accountPhoneInput.clear()
        await this.accountPhoneInput.fill(faker.phone.number('04#####'))
    }

    public async checkAddedData() {
        const element = await this.page.waitForSelector(`text=${this.memberName}`);
        expect(element).not.toBeNull();
    }

    public async checkMembersCard() {
        await expect(await this.membersCard.isVisible()).toBe(true);
    }

    public async goToMembershipTab() {
        await this.membershipButton.click()
    }

    public async clickTheThreeDots() {
        await this.threeDots.click()
    }

    public async checkDeactivateButton() {
        await expect(await this.deactivateButton.isVisible()).toBe(true);
    }

    public async clickDeactivateOption() {
        await this.deactivateOption.click();
    }

    public async clickDeactivateButton() {
        await this.deactivateButton.click()
    }

    public async checkDeactivatedMembership(selectedMember: string) {
        await this.customersTab.click()
        await new Promise(resolve => setTimeout(resolve, 2000));
        await expect(this.page.waitForSelector(`text=${selectedMember}`)).not.toBeNull();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    public async checkOptionFeature() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await expect(await this.optionsFeature.isVisible()).toBe(true);
    }
    public async clickEditOption() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.edtiMembershipButton.click();
    }

    public async addMembershipPlan() {
       
        await this.membershipInput.clear()
        await this.membershipInput.type(this.membershipPlan)
        await this.page.keyboard.press('Enter');
    }

    public async addStartDate() {
        await this.calendarButton.click({timeout:1000})
        await this.calendarArrow.click({timeout:1000})
        await this.calendarDay.click({timeout:1000})
    }

    public async checkChangedMembershipPlan() {
        await expect(this.membershipHistoryRow).toContainText(this.membershipPlan)
    }

}

