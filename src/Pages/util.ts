import { Locator, Page } from "@playwright/test"

export class UIhelper {

    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async dropDownHandler(jsCode) {
        await this.page.evaluate(jsCode)

    }

   async handleAllKindsOfDropDown(locator: string, listOfValue: any) {
        let newLocator = await this.page.$$(locator);
        for (let eachLocater of newLocator) {
            let value: any = await eachLocater.textContent()
            if (listOfValue.includes(value.toString().trim())) {
                await eachLocater.click({ force: true })
                if (typeof (listOfValue) == 'string') {
                    break
                }
            }
        }


    }

    static getRandomData() {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
}
