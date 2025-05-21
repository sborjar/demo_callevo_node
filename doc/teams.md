# Teams
[Back](../README.MD#menu)

| Description | Route | Command
|-------------|-------|---------|
|Get a all |`GET/teams`|`node src/teams/get-teams.js`|
|Get a one |`GET/teams/2012`|`node src/teams/get-teams-id.js`| 
|Create a new |`POST/team`|`node src/teams/post-team.js`|  
|Update|`PUT/team/2012`|`node src/teams/put-team.js`|
|Delete | `DELETE/team/2012` | `node src/teams/delete-team.js` |

### Required data
```json
{
    "queueid": "number | -1",
    "name": "string",
    "team_name": "string",
    "musiconhold": "string",
    "queue_member_table": [
        {
            "memberid": "number | new -1",
            "queueid": "number",
            "agentid": "number",
            "queue_name": "string",
            "interface": "string `Agent/<agent_code>`",
            "announce_holdtime": "string",
        }
    ]
}
```
