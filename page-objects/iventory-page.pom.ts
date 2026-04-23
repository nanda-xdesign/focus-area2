import {Locator, Page} from '@playwright/test';

export class InventoryPage {
    public readonly page: Page;
    public readonly cartCountLocator: Locator;
    public readonly addToCartButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartCountLocator = page.locator('.shopping_cart_badge');
        this.addToCartButtonLocator = page.getByRole('button', {name: 'Add to cart', exact: true}).first();
    }

    async getCartCount(): Promise<number> {
        const count = await this.cartCountLocator.count();

        if (count === 0) {
            return 0;
        }

        const text = await this.cartCountLocator.textContent();
        return Number(text?.trim());
    }

    async addFirstItemToCart(): Promise<void> {
        await this.addToCartButtonLocator.click();
    }

    async clickCartIcon(): Promise<void> {
        await this.page.locator('.shopping_cart_badge').click();
    }
}   