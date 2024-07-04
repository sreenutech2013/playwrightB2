import { Page } from "@playwright/test";
import { UIhelper } from "./util";

export class DropDownPage extends UIhelper {

   private multiDropDown: string = '//b[text()="Multiselect drop down"]//../../div';
   private dropDownValues: string  = '//div[contains(@id,"react-select")]'
   private googleSearchTextBox: string  = "//textarea[@title='Search' and @aria-label='Search']"
   private googleSuggestionsValues: string  = "//li[@data-attrid='AutocompletePrediction']//b"

    constructor(page: Page) {
        super(page)
    }

    async clickOnMenuDropDownField() {
        await this.page.locator(this.multiDropDown).click()
    }

    async searchInGoogle(searchString: string) {
        await this.page.locator(this.googleSearchTextBox).click()
        await this.page.locator(this.googleSearchTextBox).fill(searchString)

    }

    async selectValuesForMultiselectdropdownField(listOfValue: string[]) {
        await this.handleAllKindsOfDropDown(this.dropDownValues, listOfValue)
    }


    async selectAutoSuggestionFormGoogleSearch(listOfValue: string) {
        await this.handleAllKindsOfDropDown(this.googleSuggestionsValues, listOfValue)
    }

}