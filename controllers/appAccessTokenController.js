module.exports = class appAccessToken extends Abstract{
    constructor(){
        super(userSchema)
    }

    async create(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let user = await database.models.user.findOne({email:req.body.email}).lean()

                if(user){
                    return res.status(400).send('Email Id already exists')
                }else{ 
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                    let createObj = {
                        name:req.body.name,
                        email:req.body.email,
                        password:req.body.password,
                        type:req.body.type,
                        createdAt:new Date()
                    }
                    user = await database.models.user.create(createObj)
                    
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

            let invalidPassword = await bcrypt.compare(req.body.password,userVerify.password)

            if(!invalidPassword){
                throw("Invalid email/Password")
            }

            var token = jwt.sign({_id:userVerify._id}, "PrivateKey",{
                expiresIn: 60*60*24 
            });

            return resolve({
                success:true,
                message:"token generated successfully",
                token:token,
                type:userVerify.type,
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