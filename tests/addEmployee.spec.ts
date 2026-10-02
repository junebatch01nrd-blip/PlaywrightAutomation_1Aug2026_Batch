import {test, expect} from '@playwright/test'
import { PageManager } from '../pages/PageManager'
import { Helper } from '../Utils/Helper';

test('should add new employee', async({page})=>{

const pm = new PageManager(page)
const empData= Helper.generateData();

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await expect(pm.loginPage.loginImg).toBeVisible();

await pm.loginPage.login("Admin", "admin123")

await expect(pm.loginPage.dahboardHeading).toBeVisible();

const employeeId= await pm.pimPage.addEmployee(empData.firstName, empData.lastName);

console.log(employeeId)

await expect(pm.pimPage.successMessage).toBeVisible({timeout:30000});

const newEmployeeRow = await pm.pimPage.searchEmployeeById(employeeId);

await expect(newEmployeeRow).toBeVisible();










})