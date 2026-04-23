import {Given, When, Then} from '@cucumber/cucumber';
import {expect} from '@playwright/test';
import {page} from './browserSetup';
import {LoginPage} from '../page-objects/login-page.pom';
import {InventoryPage} from '../page-objects/iventory-page.pom';
import { CheckoutPage } from '../page-objects/checkout-page.pom';

let loginPage: LoginPage;
let initialCartCount: number;


// AC1
Given ("I am on the product catalog page", async () => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.usernameLocator.fill('standard_user');
    await loginPage.passwordLocator.fill('secret_sauce');
    await loginPage.loginButtonLocator.click();
    const inventoryPage = new InventoryPage(page);
    initialCartCount = await inventoryPage.getCartCount();
});

When ("I click the 'Add to cart' button for a chosen item", async () => {
    const addToCartButton = page.getByRole('button', {name: 'Add to cart', exact: true}).first();
    await addToCartButton.click();
});

Then ("the item should be added to my shopping cart", async () => {
    const inventoryPage = new InventoryPage(page);
    const newCount = await inventoryPage.getCartCount();        
    expect(newCount).toBe(initialCartCount + 1);
});


//AC2
Given ("I have an item in my shopping cart", async () => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstItemToCart();
});

When ("I click the shopping cart icon", async () => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.clickCartIcon();
});

Then ("I should be navigated to the 'Your Cart' page", async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});

Then ("I should see the selected item listed in my cart", async () => {
    const cartItem = page.locator('.cart_item').first();
    await expect(cartItem).toBeVisible();
});


//AC3
Given ("I am on the 'Your Cart' page", async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});

When ("I click the 'Checkout' button", async () => {
    const checkoutButton = page.getByRole('button', {name: 'Checkout'});
    await checkoutButton.click();
});

Then ("I should be navigated to the 'Checkout: Your Information' page", async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
}); 


//AC4
Given ("I am on the 'Checkout: Your Information' page", async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});

When ("I enter valid shipping information", async () => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterShippingInformation('Harry', 'Styles', '12345');
});

When ("I click the 'Continue' button", async () => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.clickContinueButton();
});

Then ("I should be navigated to the 'Checkout: Overview' page", async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
}); 


//AC5
Given ("I am on the 'Checkout: Overview' page", async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
});

When ("I review the order summary", async () => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.reviewOrderSummary();
});

When ("I click the 'Finish' button", async () => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.clickFinishButton();
});

Then ("I should be navigated to the 'Checkout: Complete!' page", async () => {
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
});

Then ("I should see a confirmation message", async () => {
    const confirmationMessage = page.locator('.complete-header');
    await expect(confirmationMessage).toHaveText('Thank you for your order!');
});
