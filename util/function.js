const fs = require('fs');

const colors = [""]

getFileNameMethod = (file) => {
    only_name = file.split(".")[0]
    method_file_name = only_name.split("-")[0].toUpperCase()
    return [only_name, method_file_name]
}

saveResponse = (file='', method= '', url='', headers=null, params=null, response=null) => {
    folder = "./results"

    try {
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }

        let name_file = `${folder}/${file}.md`;

        let color = "";
        switch(method){
            case "GET":
                color="21577d";
                break;
            case "POST":
                color="1c8056";
                break;
            case "PUT":
                color="ed8d14";
                break;
            case "DELETE":
                color="ad2525";
                break;
        }

        url = url.replace(/\?/g, "%3F")

        let txt = "\n";
        txt += "\n![](https://img.shields.io/badge/"+method+"-"+color+") ";
        txt += "![](https://img.shields.io/badge/"+url+"-d7d7d7)\n";
        // txt += "`\n"+method +" "+url+"\n`\n";
        txt += "### Headers\n";
        txt += "```\n"+JSON.stringify(headers)+"\n```\n";
        txt += "### Params\n";
        txt += "```\n"+JSON.stringify(params)+"\n```\n";
        txt += "### Response\n";
        txt += "```\n"+response+"\n```\n";
            
        fs.writeFile(name_file, txt, (err) => {
            if (err) {
              console.error('Error creating the file:', err);
            } else {
              console.log('File created successfully! ' + name_file );
            }
          });

    } catch (err) {
        console.error(err);
    }



}

module.exports = { saveResponse, getFileNameMethod }