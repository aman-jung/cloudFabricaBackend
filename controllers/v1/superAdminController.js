module.exports = class SuperAdmin extends Abstract{
    constructor(){
        super(userSchema)
    }

        /**
 * @api {get} {{url}}/test/api/v1/superAdmin/listAdmin  list all the admins 
* @apiVersion 0.0.1
* @apiGroup Super Admin
* @apiHeader {String} X-authenticated-user-token Authentication token
   * @apiParamExample {json} Response:
{
    "message": "Admin listed",
    "status": 200,
    "result": [
        {
            "name": "yulu",
            "email": "yulu@yulu.com",
            "role": "admin",
            "userInformation": {
                "personOfContactEmail": "rama@rama.com",
                "personOfContact": "S.rama"
            },
            "createdAt": "2019-05-17T16:31:08.860Z",
            "__v": 0
        },
        {
            "name": "royal brother",
            "email": "royal@brother.com",
            "role": "admin",
            "userInformation": {
                "personOfContactEmail": "hiran@email.com",
                "personOfContact": "Hiran"
            },
            "createdAt": "2019-05-17T17:52:18.461Z",
            "__v": 0
        },
        {
            "email": "joe@joe.com",
            "role": "admin",
            "userInformation": {
                "personOfContact": "joe",
                "personOfContactEmail": "joe@joe.com"
            },
            "createdAt": "2019-05-19T15:05:22.887Z",
            "__v": 0
        },
        {
            "companyName": "vogo",
            "email": "joe1@joe.com",
            "role": "admin",
            "userInformation": {
                "personOfContact": "joe",
                "personOfContactEmail": "joe@joe.com"
            },
            "createdAt": "2019-05-19T15:09:32.428Z",
            "__v": 0
        },
        {
            "companyName": "airtel",
            "email": "airtel@airtel.com",
            "role": "admin",
            "userInformation": {
                "personOfContact": "airtel1",
                "personOfContactEmail": "airtel1@airtel1.com"
            },
            "createdAt": "2019-05-19T16:01:52.960Z",
            "__v": 0
        }
    ]
}
*/


    listAdmin(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let listAdminDocuments = await database.models.user.find({
                    role:"admin"
                },{password:0,_id:0}).lean()
    
                return resolve({
                    message:"Admin listed",
                    result:listAdminDocuments
                })
            } catch (error){
                return reject({
                    message:"Admin listed",
                    result:listAdminDocuments
                })
            }
            
        })
    }
}