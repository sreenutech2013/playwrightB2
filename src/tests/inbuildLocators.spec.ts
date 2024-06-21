import { test, expect } from "@playwright/test"
import exp from "constants";



test("inbuild locators", async ({page}) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
  await page.locator("//img[@alt='company-branding']").click()
  await page.getByAltText('company-branding').click();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await expect(page.getByText("Username : Admin")).toBeVisible()
    await expect(page.getByLabel("Username")).toBeVisible();
    await page.getByRole("button", { name: "Login" }).click();
    await page.pause();

    let text = await page.getByTestId("staticID").textContent();
})