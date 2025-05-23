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

let url = `${process.env.API_PATH}file_template`

let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`,
}

/**
 * Process
 */
params = {
    "file_template": {
      "id": 0,
      "template_name": "NodeTemplate"
    },
    "file_template_fields": [
      { "field_name": "Lead Test1","field_source": "lead_phone","field_destination": "lead_phone" },
      { "field_name": "Lead Fname2","field_source": "lead_fname","field_destination": "lead_fname" },
      { "field_name": "Lead Lname2","field_source": "lead_lname","field_destination": "lead_lname" },
      { "field_name": "Custom3","field_source": "custom3","field_destination": "custom3" },
      { "field_name": "Custom8","field_source": "custom8","field_destination": "custom8" },
    ]
}

axios.post(url,params,{headers})
    .then(resp=>{
        console.log(resp.data)
        saveResponse(current_file_name, current_file_method, url, headers, JSON.stringify(params, null, 2), resp.data);
    })
    .catch(err=>{
        console.log(err)
    })
