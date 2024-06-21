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
    await page.getByText('Country* Select Country').click();
    // await clickonSkillDropDown('CSS', page);

    await clickBySelectOption('CSS',await page.locator('id=Skills'))
});
});






async function printAllNumber(num: number) {

    for (let i = 0; i >= num; i++){
        console.log(i)
    }

}


async function clickonSkillDropDown(value: string, page) {
    
    await page.locator('id=Skills').click();
    let listofOptions = await page.$$('//select[@id="Skills"]/option')
    for (let eachElement of listofOptions) {
        console.log(await eachElement.textContent())
        if (await eachElement.textContent() == value) {
            // await eachElement.scrollIntoViewIfNeeded()
            // await eachElement.click();
            // break;
        }
    }
}
    async function clickBySelectOption(value: string, locator){{
        await locator.selectOption(value);
    }
}