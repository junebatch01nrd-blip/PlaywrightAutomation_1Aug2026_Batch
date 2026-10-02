import {test, expect} from '@playwright/test';



test('end to end Orange HRM Test', async({page})=> {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await expect(page.getByRole('img', {name:'OrangeHrm'})).toBeVisible();

// Login Application

await page.getByPlaceholder('Username').fill('Admin');
await page.getByRole('textbox', {name: 'Password'}).fill('admin123');
await page.getByRole('button', {name:'Login'}).click();
await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();

await page.getByRole('link', {name: 'PIM'}).click();

await expect(page.getByRole('heading', {name:'PIM'})).toBeVisible();

await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');


//2 Add Employee

await page.getByRole('button', {name: 'Add'}).click();

await expect(page.getByText('Employee Full Name')).toBeVisible();

await page.getByRole('textbox', {name: 'First Name'}).fill('Jitesh');

await page.getByPlaceholder('Last Name').fill('Verma');


const employeeID = page.locator('.oxd-input-group').filter({has:page.locator('label', {hasText:'Employee Id'})})
.locator('.oxd-input.oxd-input--active')



const employeeIdValue = await employeeID.inputValue();

console.log('Auto Generated EMpID: ', employeeIdValue);

await page.getByRole('button', {name: 'Save'}).click();

//save successfully to be validated as assignement part

await expect(page.getByRole('heading', {name:'Personal Details'})).toBeVisible({timeout:30000});

//3 Fill the employee deatials

await page.getByRole('link', {name: 'PIM'}).click();


await employeeID.fill(employeeIdValue);

await page.getByRole('button', {name:'Search'}).click();


const newEmployeeRow =page.locator('.oxd-table-card').filter({hasText:employeeIdValue})

await expect(newEmployeeRow).toBeVisible();

await newEmployeeRow.click();


await page.locator('.oxd-input-group').filter({has:page.locator('label', {hasText:"Driver's License Number"})})
.locator('.oxd-input.oxd-input--active').fill('DL3456');


await page.locator('.oxd-input-group').filter({has:page.locator('label', {hasText:"License Expiry Date"})})
.getByPlaceholder('yyyy-dd-mm').fill('2026-31-12');


//alternate approach to select calender


const calendar= page.locator('.oxd-input-group').filter({has:page.locator('label', {hasText:"Date of Birth"})})
.getByPlaceholder('yyyy-dd-mm')

await calendar.click();

const year = '1997';
const month= 'Jan';
const day = '22';

const calendarDropdown = page.locator('.oxd-date-input-calendar')

await calendarDropdown.waitFor({state:'visible', timeout:15000})

await calendarDropdown.getByText('2026').click();

await calendarDropdown.getByText(year).click()

await calendarDropdown.getByText('September').click();

await calendarDropdown.getByText(month).click();


await calendarDropdown.getByText(day).click();


await expect(calendar).toHaveValue('1997-22-01')


})




