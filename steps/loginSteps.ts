import {Given, When, Then} from '@cucumber/cucumber';
import {expect} from '@playwright/test';
import {page} from './browserSetup';
import {LoginPage} from '../page-objects/login-page.pom';

let loginPage: LoginPage;

Given ("I am on the login page", async () => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
});

When ("I enter valid credentials in the respective fields", async () => {
    await loginPage.usernameLocator.fill('standard_user');
    await loginPage.passwordLocator.fill('secret_sauce');
});

When ("I click the 'Login' button", async () => {
    await loginPage.loginButtonLocator.click();
});

Then ("I should be redirected to the product catalog page", async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
