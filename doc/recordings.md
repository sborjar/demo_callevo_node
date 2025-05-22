# Recordings
[Back](../README.md#menu)


| Description | Route | Command
|-------------|-------|---------|
|Play |`GET/play/id`|`node src/recordings/get-play-id.js`|
|Get a all |`GET/systemrecordings`|`node src/recordings/get-recordings.js`|
|Get a one |`GET/systemrecordings/2012`|`node src/recordings/get-recordings-id.js`| 
|Create a new |`POST/systemrecording`|`node src/recordings/post-recording.js`|  
|Update|`PUT/systemrecording/2012`|`node src/recordings/put-recording-id.js`|
|Delete | `DELETE/systemrecording/2012` | `node src/recordings/delete-recording-id.js` |

### Required data
```json
{
    "recID": "number",
    "recName": "string",
    "filecontent": "file",
}
```
When the operation is new, the `recID` can be 0 or deleted.
