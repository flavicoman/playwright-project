import { chromium, Page, Browser, ElementHandle } from "@playwright/test";

let browser: Browser;
let page: Page;


async function getTextFromElements(page: Page): Promise<string[]> {
    await page.waitForSelector('.tee_time_range .tee_time_item');
    var elements = await page.$$('.tee_time_item');
    const textList: string[] = [];
    console.log("hello" + elements)
    for (const element of elements) {
        var text = await element.textContent();
        if (text !== null) {
            textList.push(text);
        }
        console.log(element);
    }
    return textList;
    // console.log(textList);
}
