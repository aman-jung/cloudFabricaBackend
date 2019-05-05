module.exports = class Login extends Abstract{
    constructor(){
        super(userSchema)
    }

    async fetch(req){
        return new Promise(async (resolve,reject)=>{
            try{
                    let loginDocument = await database.models.user.find({})
                    let responseMessage = "Login Information Fetched Successfully"
                    return resolve({message:responseMessage,result:loginDocument})
                }
            catch(err){
                return reject({message:err})
            }
        })
    }
}
