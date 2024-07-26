import { test, expect, Page,chromium } from "@playwright/test"


test.describe("This is assert the HRM login pages", async () => {

    // test.beforeAll("beforetest", async () => {
    //     let browser = await chromium.launch();
    //     let page = await browser.newPage();
    //     await page.goto("./");
    //     // await page.waitForTimeout(5000);
    //     await expect.soft(page.getByAltText('company-brandingasdas')).toBeVisible();
    //     await expect(page.getByRole("link", { name: 'OrangeHRM, Inc' })).toBeVisible();
    //     await expect(page.getByRole("link", { name: 'OrangeHRM, Inc' })).toHaveAttribute('href', 'http://www.ORANGEHRM.com', { ignoreCase: true })
    //     let hrefValue = await page.getByRole("link", { name: 'OrangeHRM, Inc' }).getAttribute('href');
    //     await expect(hrefValue).toMatch("//www.orangehrm.com")
    //     // await expect(hrefValue).not.toMatch("//www.orangehrm.com")
    //     await page.getByPlaceholder("Username").fill("Admin")
    //     await page.fill("//input[@placeholder='Password']", "admin123")
    //     await page.locator("//button[normalize-space(text()='Login')]").click();
    //     await page.waitForLoadState('networkidle');
    //     await page.context().storageState({path:"playwright/.auth/DempSiteauth.json"});


    // });
    test.use({ storageState: './playwright/.auth/DempSiteauth.json' })

    test("go to searchEvaluatePerformanceReview page", async ({ page }) => {
      
      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview")

    })
    test("go to viewSystemUsers page", async ({ page }) => {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
  
      })

})


