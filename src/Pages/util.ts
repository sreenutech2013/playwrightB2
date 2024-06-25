import { Locator, Page } from "@playwright/test"

export class utils {

    static async dropDownHandler(jsCode, page) {
        await page.evaluate(jsCode)

    }

    static async multiDropDownHandler(locator: any, listOfValue: string[]) {
        for (let eachLocater of locator) {
            let value = await eachLocater.textContent()
            if (listOfValue.includes(value.trim())){
                await eachLocater.click({force: true})
            }
        }

    }
}