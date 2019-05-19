module.exports = class CreateDefaultForm extends Abstract{
    
    constructor(){
        super(createDefaultFormSchema)
    }

    async listDefaultForm(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let defaultFormDocument = await database.models.createDefaultForm.findOne({}).lean()
                let omitData = _.omit(defaultFormDocument,"_id");

                return resolve({
                    message:"Default form fetched successfully",
                    result:omitData
                })
            }
            catch(error){
                return reject({
                    message:error
                })
            }
        })
    }
}