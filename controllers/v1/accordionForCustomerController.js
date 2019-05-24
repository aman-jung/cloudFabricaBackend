module.exports = class AccordionForCustomer extends Abstract{
    
    constructor(){
        super(accordionForCustomerSchema)
    }

    async create(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let formDocument = await database.models.accordionForCustomer.findOne({
                    adminId:req.body.adminId,
                    companyName:req.body.companyName,
                    type:req.body.type
                })

                if(formDocument){
                    throw "Form with given type already exists"
                }else{
                    formDocument = await database.models.accordionForCustomer.create({
                        adminId:req.userDetails._id,
                        companyName:req.userDetails.companyName,
                        type:req.body.type,
                        createdAt:new Date(),
                        accordionData:req.body.accordionData
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

    async edit(req){
        return new Promise(async (resolve,reject)=>{
            try{

                let result = {}
                let resultingData

                let accordionDocument = await database.models.accordionForCustomer.findOne({
                    adminId:req.body.adminId,
                    type:req.body.type,
                    companyName:req.body.companyName
                }).lean()

                if(!accordionDocument){

                   resultingData = await database.models.accordionForCustomer.create({
                        adminId:req.body.adminId,
                        companyName:req.body.companyName,
                        createdAt:new Date(),
                        allVersionData:req.body.allVersionData,
                        type:req.body.type
                    })

                } else{
                    let formDataLength = accordionDocument.allVersionData.length

                    if(formDataLength<2){
                        
                        accordionDocument.allVersionData.push(req.body.allVersionData[0])

                        resultingData = await database.models.accordionForCustomer.findOneAndUpdate({
                            adminId:req.body.adminId,
                            type:req.body.type  
                        },{$set:{allVersionData:accordionDocument.allVersionData}},{
                            new:true,
                            returnNewDocument: true
                        })

                    } else if(formDataLength === 2){

                        accordionDocument.allVersionData[0] = accordionDocument.allVersionData[1]
                        accordionDocument.allVersionData.pop()
                        accordionDocument.allVersionData.push(req.body.allVersionData[0])
                        
                        resultingData = await database.models.accordionForCustomer.findOneAndUpdate({
                            adminId:req.body.adminId,
                            type:req.body.type  
                        },{$set:{allVersionData:accordionDocument.allVersionData}
                        },{
                            new:true,
                            returnNewDocument: true})
                    }
                }

                result["adminId"] = resultingData.adminId;
                result["companyName"] = resultingData.companyName;
                result["type"] = resultingData.type;
                result["allVersionData"] = resultingData.allVersionData[resultingData.allVersionData.length-1]

                return resolve({
                    message:"Created/Updated successfully",
                    result:result
                })

            }
            catch(error){
                return reject({
                    message:error
                })
            }
        })
    }

    async undo(req){
        return new Promise(async (resolve,reject)=>{
            try{

                if(!req.params.id && !req.query.type){
                    throw "Params is required"
                }

                let accordionForCustomerDocument = await database.models.accordionForCustomer.findOne({
                    _id:ObjectId(req.params.id),
                    type:req.query.type
                }).lean()

                if(!accordionForCustomerDocument){
                    throw "No Accordion found for given params"
                } else{

                    let result = {}
                    result["adminId"] = accordionForCustomerDocument.adminId;
                    result["companyName"] = accordionForCustomerDocument.companyName;
                    result["type"] = accordionForCustomerDocument.type;
                    result["allVersionData"] = accordionForCustomerDocument.allVersionData[0]

                    return resolve({
                        message:"Undo fetched successfully",
                        result:result    
                    })
                }
            } catch(error){
                return reject({
                    message:error
                })
            }
        })
    }
}