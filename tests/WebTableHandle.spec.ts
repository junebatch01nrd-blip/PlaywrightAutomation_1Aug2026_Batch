
import {test, expect} from '@playwright/test';


//How to Handle table, rows and columns...
test('Handle Web Elements', async({page})=>{

await page.goto('https://the-internet.herokuapp.com/');

await page.getByRole('link', {name: 'Sortable Data Tables'}).click();

await page.waitForLoadState('networkidle');
await page.waitForLoadState('load');

const rowCount = await page.locator('#table1 tbody tr').count();

//print row count 
console.log("row count :",rowCount);

//Check column count

const columnCount = await page.locator('#table1 thead tr th').count();

//print row count 
console.log("column count :",columnCount);


//How to read the data from first row

const firstRow = page.locator('#table1 tbody tr').first();

console.log(await firstRow.textContent());

//validate specific cell data 
//we know the unique id or email for person and based on that we need to find rest data values


const webSiteCell = page.locator('#table1 tbody tr').filter({hasText:'jdoe@hotmail.com'}).locator('td').nth(4);


const webSiteCellText = await webSiteCell.textContent();

console.log(webSiteCellText);

//Get the Due amount from same row


const dueCell = page.locator('#table1 tbody tr').filter({hasText:'jdoe@hotmail.com'}).locator('td').nth(3);

const dueAmount = await dueCell.textContent();

console.log(dueAmount);

//validation
await expect(dueAmount).toContain('100.00');

console.log(await page.locator('#table1 tbody tr').allTextContents());



await page.waitForTimeout(5000);



});