require('dotenv').config();
const { saveResponse, getFileNameMethod } = require('../../util/function')
var request = require('request');
const path = require('path');
const [current_file_name, current_file_method] = getFileNameMethod(path.basename(__filename));
const fs = require('fs');
var FormData = require('form-data');
var axios = require('axios');

/**
 * Variables
 */

let url = `${process.env.API_PATH}pool/2622`

let headers = {
    // 'Content-Type': "multipart/form-data",
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`,
}

/**
 * Process
 */
params = {
    "poolname": "NodePool Update",
    "camp_id": "1800",
    "allow_duplicate": "n",
    "randomize": "y",
    "CleanOld": "0",
    "prefixlen": "3",
}

axios.put(url,params,{headers})
    .then(resp=>{
        console.log(resp.data)
        saveResponse(current_file_name, current_file_method, url, headers, JSON.stringify(params, null, 2), resp.data);
    })
    .catch(err=>{
        console.log(err)
    })
