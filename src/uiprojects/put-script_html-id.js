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

let url = `${process.env.API_PATH}uiproject/6990`

let headers = {
    'Content-Type': "multipart/form-data",
    'Authorization': `Bearer ${process.env.APP_TOKEN}`,
}

/**
 * Process
 */

file_name = "script.twig";
folder_path = `${process.cwd()}/files`;
file_path = `${folder_path}/${file_name}`;

if (!fs.existsSync(folder_path)) {
    fs.mkdirSync(folder_path, 0o744);
    console.log('Folder files does not exist, has been created !!!');
    return
}

if (!fs.existsSync(file_path)) {
    console.log('File does not exist !!!');
    return
}

const params =  new FormData();
params.append("projectname", "Script test2up")
params.append("camp_id", "1801")
params.append("filecontent",fs.createReadStream(file_path),{
    filename: file_name,
    contentType: 'text/plain'
})
headers['Content-Type'] = params.getHeaders()["content-type"];

axios.put(url,params,{headers})
    .then(resp=>{
        console.log(resp.data)
        saveResponse(current_file_name, current_file_method, url, headers, JSON.stringify(params, null, 2), resp.data);
    })
    .catch(err=>{
        console.log(err)
    })
