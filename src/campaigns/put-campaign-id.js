require('dotenv').config();
const { saveResponse, getFileNameMethod } = require('../../util/function')
var request = require('request');
const path = require('path');
const [current_file_name, current_file_method] = getFileNameMethod(path.basename(__filename));

/**
 * Variables
 */

let url = `${process.env.API_PATH}campaign/1801`

let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`
}

let params = {
    "camp_name": "nodecampaignss",
    // "camp_description": "Node Campaign",
    // "camp_type": "CL",
    // "dropcb": "y",
    // "timezones": "n",
    // "recordings": 1,
    // "groupid": 316,
    // "didrotation": 2,
    // "queue_name": "q282fpqahtqkyc8egq90",
    // "initialrecordID": 37,
    // "finalrecordID": 37,
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