import { test, expect } from '@playwright/test';
import { utils } from './Pages/util';
test.use({baseURL:"https://seleniumpractise.blogspot.com/"})
test('handle bootstrap dropdowns', async ({ page }) => {
    await page.goto('/2016/08/bootstrap-dropdown-example-for-selenium.html#');
    await page.locator("#menu1").click();
    let dropDownValue = "JavaScript"
    // let links = await page.getByRole("link");
    // let filterLink = await links.filter({ hasText: dropDownValue })
    // await filterLink.click()
    // await page.getByRole("link",{name: "JavaScript"}).click()
     await utils.dropDownHandler("document.querySelector('a[href=\"http://www.learn-automation.com\"]').click()", page)
});