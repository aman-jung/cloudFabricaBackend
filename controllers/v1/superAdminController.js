module.exports = class SuperAdmin extends Abstract{
    constructor(){
        super(superAdminSchema)
    }

    async create(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let superAdmin = await database.models.superAdmin.findOne({email:req.body.email}).lean()

                if(superAdmin){
                    throw "Email Id already exists"
                }else{ 
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                    superAdmin = await database.models.superAdmin.create(
                        {
                            name:req.body.name,
                            email:req.body.email,
                            password:req.body.password,
                            type:req.body.type,
                            createdAt:new Date()
                        }
                    )
                    
                    return resolve({
                        message:"Information saved successfully",
                        result:superAdmin
                    })
                }
            }catch(error){
                return reject({message:error})
            }
        })
    }

        /**
 * @api {post} {{url}}/test/api/v1/superAdmin/verify superAdmin Login credentials
 * @apiGroup superAdmin
 * @apiSuccess {String} Email
 * @apiSuccess {String} Password
 */

    async verify(req){
        let tokenValidate = await gen.utils.loginUser("superAdmin",req.body)
        return tokenValidate
    }
}