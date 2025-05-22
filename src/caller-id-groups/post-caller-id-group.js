require('dotenv').config();
const { saveResponse, getFileNameMethod } = require('../../util/function')
var request = require('request');
const path = require('path');
const [current_file_name, current_file_method] = getFileNameMethod(path.basename(__filename));

/**
 * Variables
 */

let url = `${process.env.API_PATH}caller_id_group`

let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`
}

let params = {
    "group_name": "Node GroupSSSS",
    "camp_id": 0,
    "phone": [
    //   { "phoneid": 18006 },
    //   { "phoneid": 18007 },
    ]
}

/**
 * Process
 */
request.post({url: url, json: params, headers: headers},
    function (error, response, body) {
        let resp = JSON.stringify(body)
        console.log(resp)
        if (response.statusCode == 200) {
            saveResponse(current_file_name, current_file_method, url, headers, params, resp);
        } else {
            console.log(error)
        }
    });         