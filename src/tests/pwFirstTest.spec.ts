import { test, expect } from "@playwright/test";
const { chromium, firefox, webkit } = require('playwright');


test.describe("Login tests", async () => {
  test("Login to URL with valid username and password", async () => {
      let browser = await chromium.launch();
      const page = await browser.newPage();
    await page.goto("https://playwright.dev/docs/api/class-playwright")
  });

  // test("Login to URL with valid username and Invalid password", async ()=>{

  //     //test cases

  // })
});
