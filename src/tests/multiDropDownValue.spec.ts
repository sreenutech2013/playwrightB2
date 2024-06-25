import { test, expect } from "@playwright/test"
import { utils } from "../Pages/util";
test.use({ baseURL: 'https://demoqa.com' })


test("handle MultiDrop value field", async ({page}) => {
    
    await page.goto("/select-menu");
    await page.locator('//b[text()="Multiselect drop down"]//../../div').click()
    let locator = await page.$$('//div[contains(@id,"react-select")]')
    let listOfValue: any = ['Green']
    for (let eachLocater of locator) {
        let newdata = await eachLocater.textContent();
        if (listOfValue.includes(newdata)) {
            await eachLocater.click({ force: true })
        }
    }
    // utils.multiDropDownHandler(locator, listOfValue);

})