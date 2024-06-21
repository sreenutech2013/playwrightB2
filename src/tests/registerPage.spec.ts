import { test, expect } from '@playwright/test';
test.describe("test",async()=>{
test('test', async ({ page }) => {
  await page.goto('/Register.html');
  await page.getByPlaceholder('First Name').fill('Kumar');
  await page.getByPlaceholder('Last Name').fill('Trinadh');
  await page.locator('//textarea[@ng-model="Adress"]').fill('address');
  await page.locator('input[type="email"]').fill('email@gamil.com');
  await page.locator('input[type="tel"]').fill('1234567899');
  await expect(page.getByText('Male', { exact: true })).toBeVisible();
  await expect(page.getByText('Male', { exact: true })).not.toBeChecked();
  await page.getByLabel('Male', { exact: true }).check();
  await expect(page.getByText('Male', { exact: true })).toBeChecked();
  
  await page.locator('#msdd').click();  
  await page.getByText('English').click()
  
  await page.locator('div').filter({ hasText: 'Full Name* Address Email' }).nth(1).click();

  // await expect(page.getByText('Cricket')).toBeVisible();
  // await page.locator('#basicBootstrapForm div').filter({ hasText: 'Movies' }).nth(2).click();
  // await expect(page.locator('#basicBootstrapForm div').filter({ hasText: 'Hockey' }).nth(2)).toBeVisible();
  // await page.locator('#checkbox1').check();
  // await page.locator('#checkbox2').check();
  // await page.locator('#msdd').click();
  // await page.getByText('English').click();
  // await page.locator('div').filter({ hasText: 'Full Name* Address Email' }).nth(1).click();
  // await page.locator('#Skills').selectOption('Javascript');
  // await page.getByLabel('', { exact: true }).click();
  // await page.locator('input[type="search"]').fill('indi');
  // await page.getByRole('treeitem', { name: 'India' }).click();
  // await page.locator('#yearbox').selectOption('1983');
  // await page.locator('#basicBootstrapForm div').filter({ hasText: 'Date Of Birth year' }).getByRole('combobox').nth(1).selectOption('June');
  // await page.locator('#daybox').selectOption('26');
  // await page.locator('#firstpassword').click();
  // await page.locator('#firstpassword').fill('dummy');
  // await page.locator('#secondpassword').click();
  // await page.locator('#secondpassword').fill('dummy');
  // await expect(page.getByRole('button', { name: 'Refresh' })).toBeVisible();
  // await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.locator('input[type="tel"]').click();
  // await page.locator('input[type="tel"]').fill('1234567899');
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByTitle('India').click();
  // await page.getByText('Country* Select Country').click();
});
});