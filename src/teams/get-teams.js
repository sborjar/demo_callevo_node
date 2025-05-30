require('dotenv').config();
const {saveResponse, getFileNameMethod} = require('../../util/function')
var request = require('request');
const path = require('path');
const [current_file_name, current_file_method] = getFileNameMethod(path.basename(__filename));

/**
 * Variables
 */

let url = `${process.env.API_PATH}teams`

let headers =  {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`
}

let params = null

/**
 * Process
 */

request.get({url: url, json: params, headers: headers},
    function (error, response, body) {
        console.log(body)
        if (response && response.statusCode == 200) {
            saveResponse(current_file_name, current_file_method, url, headers, params, body);
        } else {
            console.log(error)
        }
    });         