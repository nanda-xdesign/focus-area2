import {Locator, Page} from '@playwright/test';

export class CheckoutPage {
    public readonly page: Page;
    public readonly firstNameLocator: Locator;
    public readonly lastNameLocator: Locator;
    public readonly postalCodeLocator: Locator;
    public readonly continueButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameLocator = page.getByRole('textbox', {name: 'First Name'});
        this.lastNameLocator = page.getByRole('textbox', {name: 'Last Name'});
        this.postalCodeLocator = page.getByRole('textbox', {name: 'Zip/Postal Code'});
        this.continueButtonLocator = page.getByRole('button', {name: 'Continue'});
    }

    async enterShippingInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstNameLocator.fill(firstName);
        await this.lastNameLocator.fill(lastName);
        await this.postalCodeLocator.fill(postalCode);
    }

    async clickContinueButton(): Promise<void> {
        await this.continueButtonLocator.click();
    }  

    async reviewOrderSummary(): Promise<void> {
        // This method can be expanded to include specific checks for items, payment info, and shipping info
        // For now, it serves as a placeholder for the action of reviewing the order summary
    }

    async clickFinishButton(): Promise<void> {
        const finishButton = this.page.getByRole('button', {name: 'Finish'});
        await finishButton.click();
    }
}