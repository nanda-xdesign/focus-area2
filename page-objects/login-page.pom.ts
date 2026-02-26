import {Locator, Page} from '@playwright/test';

export class LoginPage {
    public readonly usernameLocator: Locator;
    public readonly passwordLocator: Locator;
    public readonly loginButtonLocator: Locator;

    constructor(page: Page) {
        this.usernameLocator = page.getByRole('textbox', {name: 'Username'});
        this.passwordLocator = page.getByRole('textbox', {name: 'Password'});
        this.loginButtonLocator = page.getByRole('button', {name: 'Login'});
    }

}