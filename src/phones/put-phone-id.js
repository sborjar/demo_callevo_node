require('dotenv').config();
const { saveResponse, getFileNameMethod } = require('../../util/function')
var request = require('request');
const path = require('path');
const [current_file_name, current_file_method] = getFileNameMethod(path.basename(__filename));

/**
 * Variables
 */

let url = `${process.env.API_PATH}phone/18009`

let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`
}

let params = {
    "phone": "593995918013",
    "active": 1,
    "description": "Phone Node 4sss",
  }

/**
 * Process
 */
request.put({url: url, json: params, headers: headers},
    function (error, response, body) {
        let resp = JSON.stringify(body)
        console.log(resp)
        if (response && response.statusCode == 200) {
            saveResponse(current_file_name, current_file_method, url, headers, params, resp);
        } else {
            console.log(error)
        }
    });         