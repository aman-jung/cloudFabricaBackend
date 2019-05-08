module.exports = class User extends Abstract{

    constructor(){
        super(userSchema)
    }

    async create(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let user = await database.models.user.findOne({email:req.body.email}).lean()

                if(user){
                    throw "Email Id already exists"
                }else{ 
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                    user = await database.models.user.create(
                        {
                            name:req.body.name,
                            email:req.body.email,
                            password:req.body.password,
                            role:req.body.role,
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
       
    return new Promise(async (resolve,reject)=>{

        try{

        let userVerify = await database.models.user.findOne({email:req.body.email}).lean()

        if(!userVerify){
           throw("Invalid email or password")   
        }

        let passwordValidate = await bcrypt.compare(req.body.password,userVerify.password)

        if(!passwordValidate){
            throw("Invalid email/Password")
        }

        var token = jwt.sign({_id:userVerify._id,role:userVerify.role}, "PrivateKey",{
            expiresIn: 60*60*24 
        });

        return resolve({
            success:true,
            message:"token generated successfully",
            token:token,
            name:userVerify.name
        })
    } catch(error){
        return reject({
            message:error
        })
    }
    })
    }
}