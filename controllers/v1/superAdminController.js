module.exports = class SuperAdmin extends Abstract{
    constructor(){
        super(adminDetailsSchema)
    }

       /**
 * @api {post} {{url}}/test/api/v1/superAdmin/adminDetails  create admin details
 * @apiGroup Super Admin
 * @apiSuccess {String} companyName
 * @apiSuccess {String} pointOfContactName
 * @apiSuccess {String} pointOfContactEmail 
 */

    async adminDetails(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let adminDocuments = await database.models.adminDetails.findOne({
                    companyName:req.body.companyName
                })

                if(adminDocuments){
                    throw "Admin details is already added"
                }else{
                    adminDocuments = await database.models.adminDetails.create({
                        companyName:req.body.companyName,
                        pointOfContactName:req.body.pointOfContactName,
                        pointOfContactEmail:req.body.pointOfContactEmail,
                        createdAt:new Date()
                    })

                    return resolve({
                        message:"Admin details created successfully",
                        result:adminDocuments
                    })
                }
            } catch(error){
                return reject({
                    message:error
                })
            }
    })}
    
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