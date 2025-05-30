require('dotenv').config();
const {saveResponse, getFileNameMethod} = require('../../util/function')
var request = require('request');
const path = require('path');
const [current_file_name, current_file_method] = getFileNameMethod(path.basename(__filename));

/**
 * Variables
 */

let url = `${process.env.API_PATH}file_template/823`

let headers =  {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`
}

params = {
    "file_template": {
      "id": 823,
      "template_name": "List_MyTest.txt-templates2"
    },
    "file_template_fields": [
      { "field_name": "Lead Pepe","field_source": "lead_phone","field_destination": "lead_phone" },
      { "field_name": "Lead Fname","field_source": "lead_fname","field_destination": "lead_fname" },
      { "field_name": "Lead Lname","field_source": "lead_lname","field_destination": "lead_lname" },
      { "field_name": "Custom","field_source": "custom","field_destination": "custom" },
    ]
  }

/**
 * Process
 */

request.put({url: url, json: params, headers: headers},
    function (error, response, body) {
        console.log(body)
        if (response && response.statusCode == 200) {
            saveResponse(current_file_name, current_file_method, url, headers, params, body);
        } else {
            console.log(error)
        }
    });         