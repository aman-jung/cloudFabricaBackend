module.exports = function(req,res,next){

    let disableTokenCheckForApis = process.env.DISABLE_TOKEN_CHECK_FOR_API.split(",")

    if(!(disableTokenCheckForApis.includes(req.path))){
        let token = req.headers['x-authenticated-user-token']

        if(token){
            jwt.verify(token,"PrivateKey",async function(err,decode){
                    
                // let userInformation = await database.models.user.findOne({
                //     _id:decode._id
                // }).lean()
        
                // req.userDetails = _.omit(userInformation,"password")
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