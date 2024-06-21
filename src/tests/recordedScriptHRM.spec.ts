import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByText('Username : Admin')).toBeVisible();
  await expect(page.getByText('Password : admin123')).toBeVisible();
  await expect(page.getByRole('button')).toContainText('Login');
  await expect(page.locator('form')).toContainText('Forgot your password?');
  await expect(page.locator('#app')).toContainText('OrangeHRM, Inc');
  await expect(page.locator('#app')).toContainText('© 2005 - 2024 OrangeHRM, Inc. All rights reserved.');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('kumar');
  await page.getByPlaceholder('Middle Name').click();
  await page.getByPlaceholder('Middle Name').fill('middlename');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('lastname');
  await page.locator('form i').first().click();
  await page.getByText('Junior Account Assistant').click();
  await page.getByPlaceholder('Type here').first().click();
  await page.getByPlaceholder('Type here').first().fill('email@gmail.com');
  await page.getByPlaceholder('Type here').first().click();
  await page.getByPlaceholder('Type here').nth(1).fill('9898989898');
  await page.getByPlaceholder('Enter comma seperated words...').click();
  await page.getByPlaceholder('Enter comma seperated words...').fill('playwright');
  await page.locator('form i').nth(2).click();
  await page.getByText('5', { exact: true }).click();
  await page.locator('form span i').click();
  await page.getByRole('button', { name: 'Save' }).click();

  // await page.locator("//img[@alt='company-branding']").click()
  // await page.getByAltText('company-branding').click();


});