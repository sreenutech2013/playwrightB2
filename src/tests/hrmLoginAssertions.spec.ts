import { test, expect } from "@playwright/test"
import { execPath } from "process";


test.describe("This is assert the HRM login pages", async () => {

    test("login page assertion", async ({ page }) => {
        
        await page.goto("./");
        // await page.waitForTimeout(5000);
        await expect.soft(page.getByAltText('company-brandingasdas')).toBeVisible();
        await expect(page.getByRole("link", { name: 'OrangeHRM, Inc' })).toBeVisible();
        await expect(page.getByRole("link", { name: 'OrangeHRM, Inc' })).toHaveAttribute('href', 'http://www.ORANGEHRM.com',{ignoreCase:true})


        let hrefValue = await page.getByRole("link", { name: 'OrangeHRM, Inc' }).getAttribute('href');

        await expect(hrefValue).toMatch("//www.orangehrm.com")

        // await expect(hrefValue).not.toMatch("//www.orangehrm.com")

        await page.getByPlaceholder("Username").fill("Admin")
        await page.fill("//input[@placeholder='Password']","admin123")

})


 })


