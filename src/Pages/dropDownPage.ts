import { Page } from "@playwright/test";
import { UIhelper } from "./util";

export class DropDownPage extends UIhelper{

    multiDropDown = '//b[text()="Multiselect drop down"]//../../div';
    dropDownValues= '//div[contains(@id,"react-select")]'
    googleSearchTextBox = "//textarea[@title='Search' and @aria-label='Search']"
    googleSuggestionsValues="//li[@data-attrid='AutocompletePrediction']//b"

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

    async selectValuesForMultiselectdropdownField(listOfValue:string[]) {
        await this.handleAllKindsOfDropDown(this.dropDownValues,listOfValue)
    }


    async selectAutoSuggestionFormGoogleSearch(listOfValue:string) {
        await this.handleAllKindsOfDropDown(this.googleSuggestionsValues,listOfValue)
    }

}