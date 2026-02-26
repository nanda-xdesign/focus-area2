import {Locator, Page} from '@playwright/test';

export class LoginPage {
    public readonly page: Page;
    public readonly usernameLocator: Locator;
    public readonly passwordLocator: Locator;
    public readonly loginButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameLocator = page.getByRole('textbox', {name: 'Username'});
        this.passwordLocator = page.getByRole('textbox', {name: 'Password'});
        this.loginButtonLocator = page.getByRole('button', {name: 'Login'});

    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.loginButtonLocator.click();
    }

}