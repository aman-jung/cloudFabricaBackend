module.exports = class SuperAdmin extends Abstract{
    constructor(){
        super(userSchema)
    }

    async listCustomerExecutive(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let customerExecutive = await database.models.user.find({
                    companyName:req.query.companyName,
                    role:"customerExecutive"
                }).lean()

                let result = new Array

                customerExecutive.forEach(eachCustomer=>{
                    let remainingCustomerData = _.omit(eachCustomer,"_id","password","__v")
                    result.push(remainingCustomerData)
                })

                return resolve({
                    message:"Customer Executive fetched successfully",
                    result:result
                })
            }catch(error){
                return reject({
                    message:error
                })
            }
        })
    }
}