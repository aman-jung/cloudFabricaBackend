module.exports = class CustomerForm extends Abstract{
    
    constructor(){
        super(customerFormSchema)
    }

    async create(req){
        return new Promise(async (resolve,reject)=>{
            try{

                let formDocument = await database.models.customerForm.findOne({
                    adminId:req.body.adminId,
                    companyName:req.body.companyName
                })

                if(formDocument){
                    throw "Form with given type already exists"
                }else{
                    formDocument = await database.models.customerForm.create({
                        adminId:req.userDetails._id,
                        companyName:req.userDetails.name,
                        createdAt:new Date(),
                        formResult:req.body.formResult
                    })

                    return resolve({
                        message:`form is created successfully`,
                        result:formDocument 
                    })
                }
            }catch(error){
                return reject({
                    error:error,
                    message:"Invalid Form Document"
                })
            }
        })
    }
}