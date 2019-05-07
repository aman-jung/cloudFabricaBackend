module.exports = class Admin extends Abstract{
    constructor(){
        super(adminSchema)
    }

    /**
 * @api {post} {{url}}/test/api/v1/admin/create admin Login credentials
 * @apiGroup admin
 * @apiSuccess {String} email
 * @apiSuccess {String} name
 * @apiSuccess {String} type 
 * @apiSuccess {String} person of contact
 * @apiSuccess {String} phone number 
 * @apiSuccess {String} companyName    
 * @apiSuccess {String} password
 */

    async create(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let admin = await database.models.admin.findOne({email:req.body.email}).lean()

                if(admin){
                    throw "Email Id already exists"
                }else{ 
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                    admin = await database.models.admin.create(
                        {
                            name:req.body.name,
                            email:req.body.email,
                            password:req.body.password,
                            type:req.body.type,
                            createdAt:new Date(),
                            "person of contact":req.body["person of contact"],
                            "phone number":req.body["phone number"],
                            companyName:req.body.companyName
                        }
                    )
                    
                    return resolve({
                        message:"Admin information saved successfully",
                        result:admin
                    })
                }
            }catch(error){
                return reject({message:error})
            }
        })
    }
    
    /**
 * @api {post} {{url}}/test/api/v1/admin/verify admin Login credentials
 * @apiGroup admin
 * @apiSuccess {String} Email
 * @apiSuccess {String} Password
 */
    async verify(req){
        let tokenValidate = await gen.utils.loginUser("admin",req.body)
        return tokenValidate
    }

    /**
 * @api {get} {{url}}/test/api/v1/admin/list List all the admin
 * @apiGroup admin
 */
    async list(req){
        
        return new Promise(async (resolve,reject)=>{
            try{
                let adminDocuments = await database.models.admin.find({}).lean()

                let result = new Array
                
                adminDocuments.forEach(eachAdminDocument=>{
                    let eachAdminObject = _.omit(eachAdminDocument,["type","password","_id","__v"])
                    result.push(eachAdminObject)
                })
                
                return resolve({
                    message:"Admin listed successfully",
                    result:result
                })
            }catch(error){
                return reject({
                    message:error
                })
            }
        })
    }
}