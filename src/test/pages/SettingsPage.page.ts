import { Page } from "@playwright/test";

import { HomePage } from "./HomePage.page";
import { Faker, faker } from "@faker-js/faker";
import { Locator } from "@playwright/test";
import expect from "expect";

const name = faker.lorem.word()
const email = faker.internet.email()
const website = faker.internet.domainName()


export class SettingsPage extends HomePage {

    private settingsNameInput: Locator = this.page.locator(".section-container:first-child > div:nth-child(1) input")
    private primaryEmailInput: Locator = this.page.locator(".section-container:first-child > div:nth-child(2) input")
    private websiteInput: Locator = this.page.locator(".section-container:first-child > div:nth-child(3) input")
    private adress1Input: Locator = this.page.locator(".section-container:nth-child(1) > div:nth-child(4) > div:nth-child(1) input ")
    private adress2Input: Locator = this.page.locator(".section-container:nth-child(1) > div:nth-child(4) > div:nth-child(2) input ")
    private cityInput: Locator = this.page.locator("..section-container:nth-child(1) > div:nth-child(5) > div:nth-child(1) input ")
    private stateInput: Locator = this.page.locator(".section-container:nth-child(1) > div:nth-child(5) > div:nth-child(2) input ")
    private zipInput: Locator = this.page.locator(".section-container:nth-child(1) > div:nth-child(5) > div:nth-child(3) input ")

    private bay1Input: Locator = this.page.locator(".section-container:nth-child(2) .input-container:first-child input")
    private bay2Input: Locator = this.page.locator(".section-container:nth-child(2) .input-container:nth-child(2) input")
    private bay3Input: Locator = this.page.locator(".section-container:nth-child(2) .input-container:nth-child(3) input")
    private bay4Input: Locator = this.page.locator(".section-container:nth-child(2) .input-container:nth-child(4) input")

    private termsCoCheckboc: Locator = this.page.locator(".flex.flex-col.gap-3 > div:nth-child(1) input.checkbox-input")
    private cancelPolicyCheckbox: Locator = this.page.locator(".flex.flex-col.gap-3 > div:nth-child(2) input.checkbox-input")
    private termsCoBox: Locator = this.page.locator(".flex.flex-col.gap-3 > div:nth-child(1) input.input")
    private cancelPolicyBox: Locator = this.page.locator(".flex.flex-col.gap-3 > div:nth-child(2) input.input")



    constructor(page: Page) {
        super(page);

    }

    public async addSettingsName() {
        await this.settingsNameInput.clear()
        await this.settingsNameInput.fill(name);
    }

    public async addSettingsEmail() {
        await this.primaryEmailInput.clear()
        await this.primaryEmailInput.fill(email);
    }

    public async addWebsite() {
        await this.websiteInput.clear()
        await this.websiteInput.fill(website)
    }

    public async addAdressLine1() {
        await this.adress1Input.clear()
        await this.adress1Input.fill(faker.location.streetAddress())
    }

    public async addAdressLine2() {
        await this.adress2Input.fill(faker.location.streetAddress())
    }

    public async addCityName() {
        await this.cityInput.fill(faker.location.city())
    }

    public async addState() {
        await this.stateInput.fill(faker.location.state())
    }

    public async addZipCode() {
        await this.zipInput.fill(faker.location.zipCode())
    }

    public async addBaysName() {
        await this.bay1Input.fill(faker.word.sample(3))
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.bay2Input.fill(faker.word.sample(3))
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.bay3Input.fill(faker.word.sample(3))
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.bay4Input.fill(faker.word.sample(3))
    }
    
    public async addTermsCo () {
       await this.termsCoCheckboc.click();
    }

    public async addCancellPolicy() { 
        await this.cancelPolicyCheckbox.click();
    }

    public async checkAdddedSettings() {
        await expect( await this.settingsNameInput.inputValue()).toBe(name);
        await expect(await this.primaryEmailInput.inputValue()).toBe(email);
    }








}

