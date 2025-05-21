# Pools
### Import Files
[Back](../README.MD#menu)

Numbers or caller id groups numbers.

| Description | Route | Command
|-------------|-------|---------|
|Get a all |`GET/pools`|`node src/pools/get-pools.js`|
|Get a one |`GET/pools/2012`|`node src/pools/get-pools-id.js`| 
|Create a new |`POST/pool`|`node src/pools/post-pool.js`|  
|Update|`PUT/pool/2012`|`node src/pools/put-pool_id.js`|
|Delete | `DELETE/pool/2012` | `node src/pools/delete-pool-id.js` |

### Required data

```json
{
    "poolname": "string",
    "camp_id": "number",
    "allow_duplicate": "boolean n|f|c",
    "randomize": "string y|n",
    "CleanOld": "number 0|1",
    "prefixlen": "number",
    "templateid": "number (see Important Notes) ",
    "file_content": "file (fromData)"
}
```
**Important Notes** 
To get a `templateid` you must to run first /src/filetemplates/get-template-from-file-header.js, configurando el nombre del archivo a importar
### Required header
```json
{
    "mimeType": "multipart/form-data",
}
```

