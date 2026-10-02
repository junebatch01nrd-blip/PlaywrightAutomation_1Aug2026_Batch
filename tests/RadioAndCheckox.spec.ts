import {test, expect} from '@playwright/test'

test('Handle Radio buttons', async({page})=>{

//How to Handle radios

await page.goto('https://letcode.in/radio');
await page.locator('#yes').check(); //diffrence between check and click
await expect(page.locator('#yes')).toBeChecked();

const isCheckedYes = await page.locator('#yes').isChecked();

console.log(isCheckedYes);

const isCheckedNo = await page.locator('#no').isChecked();
console.log(isCheckedNo);

await expect(page.locator('#yes')).toBeChecked();

await page.locator('#no').check();

const isCheckedNoAfterChecked = await page.locator('#no').isChecked();
console.log(isCheckedNoAfterChecked);

await expect(page.locator('#no')).toBeChecked();

await page.waitForTimeout(5000)

});


test('verify checkbox selection', async({page})=>{

await page.goto('https://letcode.in/radio');

await page.getByLabel('Remember me').uncheck();
await expect(page.getByLabel('Remember me')).not.toBeChecked();

await page.getByLabel('I agree to the ').check();
await expect(page.getByLabel('I agree to the ')).toBeChecked();

console.log(await page.getByLabel('Maybe').isDisabled());
console.log(await page.getByLabel('Maybe').isEnabled());




});