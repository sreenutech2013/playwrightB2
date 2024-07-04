import { test, expect } from "@playwright/test"
import { DropDownPage } from "../Pages/dropDownPage";
test.use({ baseURL: 'https://demoqa.com' })

let dropDownPage: DropDownPage


test("handle MultiDrop value field", async ({ page }) => {

    await page.goto("/select-menu");
    dropDownPage = new DropDownPage(page);
    await dropDownPage.clickOnMenuDropDownField();
    let listOfValue: any = ['Green', 'Black']
    await dropDownPage.selectValuesForMultiselectdropdownField(listOfValue);

})


test("handle suggestion dropdown value field", async ({ page }) => {

    await page.goto("https://www.google.com/");
    dropDownPage = new DropDownPage(page);
    await dropDownPage.searchInGoogle('india');
    let listOfValue: any = 'results'
    await dropDownPage.selectAutoSuggestionFormGoogleSearch(listOfValue);

})

