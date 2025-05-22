require('dotenv').config();
const {saveResponse} = require('../../util/function')
var request = require('request');
const path = require('path');
const [current_file_name, current_file_method] = getFileNameMethod(path.basename(__filename));
filename = path.basename(__filename).split(".");

/**
 * Variables
 */

let url = `${process.env.API_PATH}appversion?app=agent`

let headers =  {
    'Content-Type': 'application/json',
}

let params = null

/**
 * Process
 */

request.get({url: url,headers: headers},
    function (error, response, body) {
        console.log(body)
        if(response.statusCode == 200){
            saveResponse(filename[0],(filename[0].split("-")[0]).toUpperCase(), url, headers, params, body);
        }
    });         