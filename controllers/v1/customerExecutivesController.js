module.exports = class CustomerExecutive extends Abstract{
    
    constructor(){
        super(customerExecutivesSchema)
    }

    async create(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let customerExecutive = await database.models.customerExecutives.findOne({email:req.body.email}).lean()

                if(customerExecutive){
                    throw "Email Id already exists"
                }else{ 
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                    customerExecutive = await database.models.customerExecutives.create(
                        {
                            name:req.body.name,
                            email:req.body.email,
                            password:req.body.password,
                            type:req.body.type,
                            createdAt:new Date(),
                            companyName:req.body.companyName,
                            adminId:mongoose.Types.ObjectId(req.body.adminId),
                            employeeId:req.body.employeeId
                        }
                    )
                    
                    return resolve({
                        message:"Customer Executive information saved successfully",
                        result:customerExecutive
                    })
                }
            }catch(error){
                return reject({message:error})
            }
        })
    }
    
    async verify(req){
        let tokenValidate = gen.utils.loginUser("customerExecutives",req.body)
        return tokenValidate
    }

    async list(req){

        return new Promise(async (resolve,reject)=>{
            try{
                let customerExecutiveDocument = await database.models.customerExecutives.find({
                    companyName:req.query.companyName
                }).lean()

                let resultingArray = new Array

                customerExecutiveDocument.forEach(eachCustomerExecutive=>{
                    let eachCustomerObject = _.pick(eachCustomerExecutive,["name","employeeId","email"])
                    resultingArray.push(eachCustomerObject)
                })

                return resolve({
                    message:"Customer executive fetched successfully",
                    result:resultingArray
                })
            }catch(error){

                return reject({
                    message:error
                })
            }
        })
    }

}