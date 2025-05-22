# Users
[Back](../README.md#menu)



| Description | Route | Command
|-------------|-------|---------|
|Get a list of my tenant's users|`GET/users`|`node src/users/get-users.js`|
|Get a specific user|`GET/users/2012`|`node src/users/get-users-id.js`| 
|Create a new user|`POST/user`|`node src/users/post-user.js`|  
|Update a user|`PUT/user/2012`|`node src/users/put-user-id.js`|
|Delete a user | `DELETE/user/2012` | `node src/users/delete-user-id.js` |


### Required data
```json
{
    "userid": "number | new 0",
    "username": "string",
    "fullname": "string",
    "email": "emailcom",
    "usertype": "number",
    "tenantid": "number",
    "language": "string",
}
```
When the operation is new, the `userid` can be 0 or deleted.
### Usertype
```json
[
    { "usertype": "1",  "name": "System Administrator"},
    { "usertype": "13",  "name": "Supervisor"},
    { "usertype": "27",  "name": "Agent"},
    { "usertype": "30",  "name": "Clicker"},
    { "usertype": "34",  "name": "Political Admin"},
    { "usertype": "35",  "name": "Political Supervisor"},
    { "usertype": "40",  "name": "Data Retriever"},
    { "usertype": "42",  "name": "View Only Supervisor"},
]
```
### Supported languages
```json
[en]
```

