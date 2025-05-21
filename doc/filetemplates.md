# File Templates
[Back](../README.MD#menu)

Numbers or caller id groups numbers.

| Description | Route | Command
|-------------|-------|---------|
|Get all |`GET/file_templates`|`node src/filetemplates/get-filetemplates.js`|
|Get one |`GET/file_templates/823`|`node src/filetemplates/get-filetemplates-id.js`|
|Get one from header|`GET/file_templates/2012`|`node src/filetemplates/get-filetemplates-id.js`| 
|New from json |`POST/file_template`|`node src/filetemplates/post-filetemplate-json.js`|  
|New from header |`POST/make_template`|`node src/filetemplates/post-filetemplate-header.js`|  
|Duplicate |`POST/duplicate_template/823`|`node src/filetemplates/post-duplciate-template-id.js`|  
|Update|`PUT/file_template/2012`|`node src/filetemplates/put-filetemplate_id.js`|
|Delete | `DELETE/file_template/2012` | `node src/filetemplates/delete-filetemplate-id.js` |

### Required data
```json
{
    "file_template": {
        "id": "number",
        "template_name": "string"
    },
    "file_template_fields": [
        {
            "field_destination": "string",
            "field_name": "string",
            "field_source": "string"
        }
    ]
}
```


