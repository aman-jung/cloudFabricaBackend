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
                        result:user
                    })
                }
            }catch(error){
                return reject({message:error})
            }
        })
    }
    
    async verify(req){
        let accessToken = new appAccessTokenBaseControllers
        let tokenValidate = await accessToken.verify("superAdmin",req.body)
        return tokenValidate
    }
}