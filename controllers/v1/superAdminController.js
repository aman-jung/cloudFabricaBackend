module.exports = class SuperAdmin extends Abstract{
    constructor(){
        super(userSchema)
    }

           /**
 * @api {get} {{url}}/test/api/v1/superAdmin/listAdmin  list all the admins 
 * @apiGroup Super Admin
 * @apiSuccess {String} name
 * @apiSuccess {String} email
 * @apiSuccess {String} role
 * @apiSuccess {String} createdAt
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