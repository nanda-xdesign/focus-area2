import {test, expect} from '../page-objects/fixtures';

test ('should login successfully with valid credentials', async ({page, loginPage}) => {

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});