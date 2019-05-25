module.exports = class Configurations extends Abstract{

    constructor(){
        super(configurationsSchema)
    }

    async create(req){
        new Promise(async (resolve,reject)=>{
            try{

                let navigationDocument = await database.models.configurations.create({
                    name:req.body.name,
                    navigation:req.body.navigation
                })

                return resolve({
                    message:"Navigation configurations fetched successfully"
                })
            }catch(error){
                return reject({
                    message:error
                })
            }
        })
    }

              /**
 * @api {get} {{url}}/test/api/v1/configurations/navigation  Navigation Links
* @apiVersion 0.0.1
* @apiGroup Navigation
* @apiHeader {String} X-authenticated-user-token Authentication token
*  @apiParamExample {json} Response:
     
* {

    "message": "Configuration successfully fetched",
    "status": 200,
    "result": {
        "tabActions": [
            {
                "name": "Super Admin Dashboard",
                "id": "superAdmin",
                "tabActions": [
                    {
                        "name": "Add Admin Credentials",
                        "id": "addAdmin",
                        "tabActions": []
                    },
                    {
                        "name": "List Admin",
                        "id": "listAdmin",
                        "tabActions": []
                    },
                    {
                        "name": "Create Admin Profile/Details",
                        "id": "adminDetails",
                        "tabActions": []
                    }
                ]
            }
        ]
    }
*}
*/

    async navigation(req){
        return new Promise(async(resolve,reject)=>{
            try{

                let userRole = req.userDetails.role
                let navigationDocument = await database.models.configurations.findOne({
                    name:"navigation"
                }).lean()

                if(!navigationDocument){
                    throw "No configuration found"
                }

                return resolve({
                    message:"Configuration successfully fetched",
                    result:navigationDocument.result.tabGroups[userRole]
                })
            } catch(error){
                return reject({
                    message:error
                })
            }
        })
    }
}