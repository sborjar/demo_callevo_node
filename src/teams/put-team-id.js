require('dotenv').config();
const { saveResponse, getFileNameMethod } = require('../../util/function')
var request = require('request');
const path = require('path');
const [current_file_name, current_file_method] = getFileNameMethod(path.basename(__filename));

/**
 * Variables
 */

let url = `${process.env.API_PATH}team/10218`

let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`
}

let params = {
    "queue_id": 10218,
    "record": { 
        "name": "TeamNodes",
        "team_name": "TeamNodes",
     },
    "queue_member_table": [
        {
            "agentid": 15337,    
            "queue_name": "TeamNodes",
            "interface": "Agent/u282xdaw7ahwzfz5gsht",
        },
        {
            "agentid": 15338,    
            "queue_name": "TeamNodes",
            "interface": "Agent/u282ms5xpeg5m696zckb",
        },
        {
            "agentid": 15339,    
            "queue_name": "TeamNode",
            "interface": "Agent/u2822htb7mp0d8rnehrd",
        },
    ]
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