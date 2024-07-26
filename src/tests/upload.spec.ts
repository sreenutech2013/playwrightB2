import { test, expect, Page,chromium } from "@playwright/test"

test.describe("upload file", async () => {

    test("upload", async ({ page }) => {

        await page.goto("https://ps.uci.edu/~franklin/doc/file_upload.html")

        await await page.locator('//input[@name="userfile"]').setInputFiles("C:\Users\satish\Downloads\Manual Testing-Course Content.pdf")

    });
    
});