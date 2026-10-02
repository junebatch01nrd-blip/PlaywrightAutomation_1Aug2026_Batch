import {test, expect} from '@playwright/test';

test('Playwright Basic Actions and Assertions', async ({ page }) => {
  await page.goto('https://xqa.io/practice');
  await expect(page).toHaveURL('https://xqa.io/practice');  // test passed if the url is same as expected

  console.log(await page.title());  // print the title of the page in console
  await expect(page).toHaveTitle(/practice exercises/i);
  //await page.getByRole('link', { name: 'Elements', exact:true }).click();
  await page.getByRole('heading', { name: 'Elements'}).click();
  await expect(page.getByLabel('Full Name')).toBeVisible();  // test passed if the element is visible

  await page.locator('input#userName').fill('Playwright User');
  console.log(await page.locator('input#userName').inputValue());
  
  await expect(page.locator('input#userName')).toHaveValue('Playwright User');  // test passed if the value is same as expected

  await page.getByPlaceholder('name@example.com').fill('playwright@example.com');
  await page.getByLabel('Current Address').fill('123 Main Street, Anytown, USA');
  await page.getByLabel('Permanent Address').pressSequentially('456 Elm Street, Othertown, USA', { delay: 100 });
  
  //Keyboard actions
  await page.getByLabel('Current Address').press('Control+A'); //select all text in the Current Address field
  await page.locator('textarea#currentAddress').clear(); //clear the Current Address field
  await page.getByLabel('Permanent Address').dblclick(); //double click on the Permanent Address field
  await page.getByLabel('Permanent Address').press('Backspace'); //delete the text in the Permanent Address field
  
  //validation
  await expect(page.getByLabel('Current Address')).toBeEmpty();  // test passed if the Current Address field is empty
  await page.locator('textarea#currentAddress').pressSequentially('Updated 123 Main Street, Anytown, USA', { delay: 100 }); //fill the Current Address field again
  await page.getByLabel('Permanent Address').fill('Updated 456 Elm Street, Othertown, USA'); //fill the Permanent Address field again
  //await page.getByRole('button', { name: 'Submit' }).click(); //click on the Submit button
  await page.getByRole('button', { name: 'Submit' }).hover(); //hover on the Submit button
  await page.getByLabel('Permanent Address').press('Tab'); //press Tab key to move focus to the Submit button
  await page.getByRole('button', { name: 'Submit' }).press('Enter'); //press Enter key to click on the Submit button

  await page.waitForTimeout(3000);
  //Locator Chaining  

  console.log(await page.locator('div#output').locator('p').count());

  const nameText= await page.locator('div#output').locator('p').first().textContent(); //output text
  console.log(nameText);

  const emailText= await page.locator('div#output').locator('p').nth(1).textContent();
  console.log(emailText);

  const currentAddressText= await page.locator('div#output').locator('p').nth(2).textContent();
  console.log(currentAddressText);

  const permanentAddressText= await page.locator('div#output').locator('p').last().textContent();
  console.log(permanentAddressText);

  //most imp question diff between toHavetext and toContainText
  await expect(page.locator('div#output').locator('p').first()).toHaveText('Name: Playwright User'); //test passed if the text is same as expected
  await expect(page.locator('div#output').locator('p').nth(1)).toContainText('playwright@example.com'); //test passed if the text contains the expected text
 
  await expect(page.locator('div#output').filter({ hasText: 'Updated 123 Main Street, Anytown, USA' })).toBeVisible(); //test passed if the element is visible
  
  await expect(page.locator('#output').getByText('Updated 456 Elm Street, Othertown, USA')).toBeVisible(); //test passed if the element is visible
  
  await page.locator('Input#userName').scrollIntoViewIfNeeded(); //scroll the element into view if needed
  await page.waitForTimeout(3000);

//Page Navigation
  await page.goto('https://xqa.io/');
  await page.goBack();
  await expect(page).toHaveURL('https://xqa.io/practice/text-box');
  await page.goForward();
  await expect(page).toHaveURL('https://xqa.io/');
  await page.reload();
  await expect(page).toHaveURL('https://xqa.io/');

 await page.waitForTimeout(3000);

 

  


});