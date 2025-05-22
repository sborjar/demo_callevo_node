# Phones
[Back](../README.MD#menu)

Numbers or phones numbers.

| Description | Route | Command
|-------------|-------|---------|
|Get a all |`GET/phones`|`node src/phones/get-phones.js`|
|Get a one |`GET/phones/2012`|`node src/phones/get-phones-id.js`| 
|Create a new |`POST/phone`|`node src/phones/post-phone.js`|  
|Update|`PUT/phone/2012`|`node src/phones/put-phone.js`|
|Delete | `DELETE/phone/2012` | `node src/phones/delete-phone.js` |

### Required data
```json
{
  "active": "number",
  "description": "string",
  "phone": "string"
}
```
### Active
```json
0 - Inactive
1 - Active
```
