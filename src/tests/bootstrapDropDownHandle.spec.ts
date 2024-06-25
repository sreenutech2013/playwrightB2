import { test, expect } from '@playwright/test';
import { utils } from '../Pages/util';
import { strictEqual } from 'assert';
test.use({baseURL:"https://getbootstrap.com/docs/4.0/components/dropdowns/"})
test('handle bootstrap dropdowns', async ({ page }) => {
    await page.goto('/');
    await page.locator("#dropdownMenuButton").click();
    let dropDownValue = "Action"
    let links = await page.getByRole("link");
    let filterLink = await links.filter({ hasText: dropDownValue },strictEqual: true)
    await filterLink.click()
    // await page.getByRole("link",{name: "JavaScript"}).click()
    //  await utils.dropDownHandler("document.querySelector('a[href=\"http://www.learn-automation.com\"]').click()", page)
});