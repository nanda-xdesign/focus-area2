import {Before, After} from '@cucumber/cucumber';
import { chromium, expect, Page, Browser } from '@playwright/test';

let browser: Browser;
let page: Page;

Before(async () => {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    page = await context.newPage();
});

After(async () => {
    await browser.close();
})  ;

export {page}