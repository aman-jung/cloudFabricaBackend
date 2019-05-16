module.exports = class Configurations extends Abstract{

    constructor(){
        super(configurationsSchema)
    }

    async create(req){
        new Promise(async (resolve,reject)=>{
            try{

                let navigationDocument = await database.models.configurations.create({
                    name:req.body.name,
                    navigation:req.body.navigation
                })

                return resolve({
                    message:"Navigation configurations fetched successfully"
                })
            }catch(error){
                return reject({
                    message:error
                })
            }
        })
    }

    
    async navigation(req){
        return new Promise(async(resolve,reject)=>{
            try{

                let userRole = req.userDetails.role
                let navigationDocument = await database.models.configurations.findOne({
                    name:"navigation"
                }).lean()

                if(!navigationDocument){
                    throw "No configuration found"
                }

                return resolve({
                    message:"Configuration successfully fetched",
                    result:navigationDocument.result.tabGroups[userRole]
                })
            } catch(error){
                return reject({
                    message:error
                })
            }
        })
    }
}