import {test, expect} from '@playwright/test';


test('handle frames and nested frames', async({page})=>{

await page.goto('https://letcode.in/frame');

//await page.getByRole('textbox', {name: 'Enter name'}).fill('Playwright test');

const frame1 = page.frameLocator('iframe#firstFr')

await frame1.locator("input[name='fname']").fill('Playwright test');

console.log(await frame1.getByRole('textbox', {name: 'Enter name'}).inputValue());

await expect(frame1.getByPlaceholder('Enter name')).toHaveValue("Playwright test");

//nested frames

await frame1.getByPlaceholder('Enter email').fill('testemail@mailinator.com');

const frame2 = frame1.frameLocator("[src='/innerframe']");


await frame2.getByPlaceholder('Enter email').fill('frame2testemail@mailinator.com');

console.log(await frame2.getByPlaceholder('Enter email').inputValue());

await expect(frame2.getByPlaceholder('Enter email')).toHaveValue('frame2testemail@mailinator.com')

await page.waitForTimeout(5000);


const newFrame3 = page.frame({name:'firstFr'}); //Alternate way to handle frames

//Multiple frames

console.log(await page.frames().length);


});