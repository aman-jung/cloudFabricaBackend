module.exports = function(req,res,next){

    let disableTokenCheckForApis = process.env.DISABLE_TOKEN_CHECK_FOR_API.split(",")

    if(!(disableTokenCheckForApis.includes(req.path))){
        let token = req.headers['x-authenticated-user-token']

        if(token){  
            jwt.verify(token,"PrivateKey",async function(err,decode){
                
                if(!decode){
                    return res.status(404).send({
                        success:false,
                        message:"User is not recognized"    
                    })
                }
                let userInformation = await database.models.user.findOne({
                    _id:decode._id
                },{password:0}).lean()
        
                if(userInformation){
                    req.userDetails = userInformation
                }else{
                    return res.status(404).send({
                        success:false,
                        message:"User is not recognized"
                    })
                }
                next()
            })
        } else{
            return res.status(403).send({
                success:false,
                message:"No token provided"
            })
        }
    }else{
        next()
    }
}