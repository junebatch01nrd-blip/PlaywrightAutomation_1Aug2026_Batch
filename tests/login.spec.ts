import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import testData from '../testData/testData.json' with { type: 'json' }
import { ExelUtils } from '../Utils/ExcelUtils'


test('valid login', { tag: '@smoke' }, async({page})=>{


const loginPage = new LoginPage(page)

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//Screenshot
await page.waitForTimeout(5000);
await page.screenshot({path:'screenshots/homepage.png', fullPage:true});

await expect(loginPage.loginImg).toBeVisible();

await loginPage.loginImg.screenshot({path:'screenshots/login-img.png'});

await loginPage.login(testData.username, testData.password)

await expect(loginPage.dahboardHeading).toBeVisible();




})


test('In-valid login', async({page})=>{


const loginPage = new LoginPage(page)

const userData = ExelUtils.getData('./testData/credentials.xlsx', 'credentials', 0);

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await expect(loginPage.loginImg).toBeVisible();

await loginPage.login(userData.username, userData.password);

await expect(page.getByText("Invalid credentials")).toBeVisible();




})