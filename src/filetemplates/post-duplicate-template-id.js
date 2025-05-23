require('dotenv').config();
const { saveResponse, getFileNameMethod } = require('../../util/function')
var request = require('request');
const path = require('path');
const [current_file_name, current_file_method] = getFileNameMethod(path.basename(__filename));
const fs = require('fs');
const readline = require('readline');
var axios = require('axios');


/**
 * Variables
 */

let url = `${process.env.API_PATH}duplicate_template/1240`

let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`,
}

/**
 * Process
 */
params = null

axios.post(url,params,{headers})
    .then(resp=>{
        console.log(resp.data)
        saveResponse(current_file_name, current_file_method, url, headers, params, resp.data);
    })
    .catch(err=>{
        console.log(err)
    })
