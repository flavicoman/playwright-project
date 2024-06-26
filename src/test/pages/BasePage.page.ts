import { Page } from '@playwright/test';

import links from "../utils/links.json"


export class BasePage {
    readonly page: Page

    constructor(page: Page) {

        this.page = page;
    }

    public async goto() {
        await this.page.goto(links.url);
    }

}