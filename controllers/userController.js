module.exports=class User extends Abstract{
    constructor(){
        super(userSchema)
    }



    async fetch(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let userInformation = await database.models.user.find({})
                let responseMessage = "User Information Fetched Successfully"
                return resolve({message:responseMessage,result:userInformation})
            }catch(err){
                console.log(err)
            }
        })
    }
}