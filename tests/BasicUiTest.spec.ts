import {test, expect} from '@playwright/test';


  test('should locate elements using different strategies', async ({ page }) => {
    await page.goto('https://letcode.in/edit'); 

    // await page.getByRole('link', { name: 'Goto Home' }).click();
    // await page.getByRole('button', { name: 'Find Location' }).click();
    // await page.getByRole('textbox', { name: 'nametextbox' }).click();
    // await page.getByRole('checkbox', { name: 'namecheckbox' }).click();
    // await page.getByRole('heading', { name: 'Button' }).click();
    await page.getByLabel('Enter your full Name').fill('Ramesh Chaturvedi');
   

  });

  test('sauce demo login with playwright locators', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
     await expect(page).toHaveTitle('Swag Labs');  //Tab validation
     console.log(await page.title());   
     await expect(page.getByText('Swag Labs')).toBeVisible();  //Ui Page validation
    
    // await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    // const username = page.getByRole('textbox', { name: 'Username' });
    // await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await expect(page.getByText('Products')).toBeVisible();
    // //await expect(page.getByText('You have successfully logged in!')).toBeVisible();

    // await page.waitForTimeout(3000);

    // await page.getByPlaceholder('Username').fill('standard_user');
    // await page.getByPlaceholder('Password').fill('secret_sauce');
    // await page.getByTestId('login-button').click();
    // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');  // test passed if the url is same as expected


    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input.submit-button').click();
    await expect(page).toHaveURL(/inventory\.html/);  // test passed if the url is same as expected
    await expect(page.locator('.title')).toHaveText('Products');  // test passed if the text is same as expected
    await expect(page.locator('.title').filter({hasText: 'Products'})).toBeVisible();  // test passed if the element is visible


  });




