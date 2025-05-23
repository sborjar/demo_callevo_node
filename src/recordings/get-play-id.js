require('dotenv').config();
const { saveResponse, getFileNameMethod } = require('../../util/function')
var request = require('request');
const path = require('path');
const [current_file_name, current_file_method] = getFileNameMethod(path.basename(__filename));
const fs = require('fs');
var axios = require('axios');

/**
 * Variables
 */

let url = `${process.env.API_PATH}play/36`

let headers = {
    'Content-Type': 'audio/mpeg',
    'Authorization': `Bearer ${process.env.APP_TOKEN}`
}

let params = null

/**
 * Process
 */

folder_path = `${process.cwd()}/files`;

if (!fs.existsSync(folder_path)) {
    fs.mkdirSync(folder_path, 0o744);
    console.log('Folder files does not exist, has been created !!!');
    return
}

download();

async function download(){
    await axios({
        method: 'GET',
        url: url,
        headers: headers, 
        responseType: 'arraybuffer', // Especificamos que esperamos un archivo binario
    })
    .then(response=>{
        let f;
        if (Object.hasOwn(response.headers, "accept-ranges")){
            if (response.headers["accept-ranges"] == "bytes") {
                f = response.headers["content-disposition"]
                f = f.replace("attachment;", "")
                f = f.replace(" filename=", "")
                f = f.replace(/\"/g, "")
            }
            
            try {
                fs.writeFile(`${folder_path}/${f}`, response.data, (err) => {
                    if (err) {
                        console.error('Error:', err);
                        return;
                    }    
                });

                console.log(`File to play created successfully! ${folder_path}/${f}`);
                saveResponse(current_file_name, current_file_method, url, headers, params, `${folder_path}/${f}`);
            } catch (err) {
                console.error('Error:', err);
            }
        }

    })
    .catch(err=>{
        console.log(err)
    });
}
