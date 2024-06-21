export class utils {

    static async dropDownHandler(jsCode, page) {      
        await page.evaluate(jsCode)
        
    } 


}