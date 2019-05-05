function loginUser(modelName,bodyData){

    return new Promise(async (resolve,reject)=>{

        try{

        let userVerify = await database.models[modelName].findOne({email:bodyData.email}).lean()

        if(!userVerify){
           throw("Invalid email or password")   
        }

        let invalidPassword = await bcrypt.compare(bodyData.password,userVerify.password)

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

module.exports={
    loginUser:loginUser
}