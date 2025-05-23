# Tenants

[Back](/README.md#menu)


| Description | Route | Command
|-------------|-------|---------|
|Get a all |`GET/tenants`|`node src/tenants/get-tenants.js`|
|Get a one |`GET/tenants/2012`|`node src/tenants/get-tenants-id.js`| 
|Update|`PUT/tenant/2012`|`node src/tenants/put-tenant.js`|

### Required data
```json
{
    "activate_tenant": "string",
    "address": "string",
    "email" : "string",
    "camp_type": "string",
    "defaultcalleridgroup": "number",
    "inbound_number": "string",
    "name": "string",
    "selectcmp": "number",
    "leadtype": "string",
    "timeid": "number",
    "timeused": "number",
    "usedispopt": "number"
}
```