import {test,expect} from "@playwright/test"

test('test', async ({ page }) => {

    await page.goto('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html');
    await page.getByRole('button', { name: 'Tutorials' }).click();

    let links = await page.getByRole('link');
    let linksfilter = links.filter({ hasText: 'CSS' });
    linksfilter.click();
});