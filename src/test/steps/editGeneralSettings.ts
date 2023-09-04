import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";
import { pageFixture } from "../setup/pageFixture";
import { expect } from 'expect';
import { SettingsPage } from "../pages/settingsPage.page";

let browser: Browser;
let page: Page;
let admin : SettingsPage

 
Given('admin is on the general settings page', async function () {
  
  return 'pending';
});

