require('dotenv').config();
const {saveResponse} = require('../../util/function')
var request = require('request');
const path = require('path');

filename = path.basename(__filename).split(".");

/**
 * Variables
 */

let url = `${process.env.API_PATH}users/15308`
let headers =  {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`
}
let params = null

/**
 * Process
 */

request.get({url: url,headers: headers},
    function (error, response, body) {
        console.log(body)
        if(response.statusCode == 200){
            saveResponse(filename[0], "GET", url, headers, params, body);
        } else {
            console.log(error)
        }
    });         