import { test, expect } from "@playwright/test"
import { exec } from "child_process";
import { chromium } from "playwright"

test.describe("login HRM", async () => {

    test("HRM login with Valid username and Password", async () => {
        let browser = await chromium.launch();
        let page = await browser.newPage();
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator("name='username'").fill("Admin");
        await page.locator("name='password'").fill("admin123")
        await page.locator("type='submit'").click();
        await expect(await page.locator("placeholder='Search'")).toBeVisible();
    })
})