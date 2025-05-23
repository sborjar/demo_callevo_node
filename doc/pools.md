# Pools - Import Files

[Back](/README.md#menu)

List of numbers to import to make a call. 
### File to import 
Example
```c
lead_phone,lead_fname,lead_lname,custom,custom1,custom2
7209888027,Constumer1,LName1,AAAAAA1,BBBB1,CCCC1
7209888028,Constumer2,LName2,AAAAAA2,BBBB2,CCCC2
```

### Routes
| Description | Route | Command
|-------------|-------|---------|
|Get a all |`GET/pools`|`node src/pools/get-pools.js`|
|Get a one |`GET/pools/2012`|`node src/pools/get-pools-id.js`| 
|Create a new |`POST/pool`|`node src/pools/post-pool.js`|  
|Update|`PUT/pool/2012`|`node src/pools/put-pool_id.js`|
|Delete | `DELETE/pool/2012` | `node src/pools/delete-pool-id.js` |
|Start | `POST/start_pool/2012` | `node src/pools/post-start-pool-id.js` |
|Stop| `POST/stop_pool/2012` | `node src/pools/post-stop-pool-id.js` |

### Required data

```json
{
    "poolname": "string",
    "camp_id": "string",
    "allow_duplicate": "boolean n|f|c",
    "randomize": "string y|n",
    "CleanOld": "string 0|1",
    "prefixlen": "string",
    "file_content": "file (formData)"
}
```
**Important Notes** 
To get a `templateid` you must to run first /src/filetemplates/get-template-from-file-header.js, configurando el nombre del archivo a importar
### Required header
```json
{
    "Content-Type": "multipart/form-data",
}
```
