import axios from "axios"
import {test,expect} from "@playwright/test"

// api automation :- 

// 1. install axios through package.json
// 2. write the test by importing axios 
// 3. make you config var with valid url, method , header and payload(data)
// 4. request the api and store the response in a var 



test.describe("API automation",async()=>{
    test('Api Automation for get a call', async () => {

        let config = {
            method: 'get',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC',
            headers: { 
              'cookie': 'orangehrm=0af845cb47c4a2b02f2ab26d4af16989', 
            }
          };

        let response = await axios.request(config);
        expect(response.status).toBe(200)
        expect(response.data.data[0].userName).toBe('Admin')

    })

    test.only('Api Automation for post call', async () => {

        let dataPayload = {
            "username": "admin00119NewUser",
            "password": "admin00119",
            "status": true,
            "userRoleId": 1,
            "empNumber": 173
          };
          
          let config = {
            method: 'post',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
            headers: { 
              'cookie': 'orangehrm=0af845cb47c4a2b02f2ab26d4af16989', 
            },
            data : dataPayload
          };

        let response = await axios.request(config);
        expect(response.status).toBe(200)
        expect(response.data.data.userName).toBe(dataPayload.username)

    })
})