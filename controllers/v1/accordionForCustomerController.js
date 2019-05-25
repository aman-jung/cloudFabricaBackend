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

       /**
 * @api {post} {{url}}/test/api/v1/accordionForCustomer/edit Edit Form
 * @apiGroup Accordion
 * @apiHeader {String} X-authenticated-user-token Authentication token
 * @apiParam (Request body) {String} allVersionData
 * @apiParam (Request body) {String} adminId
 * @apiParam (Request body) {String} companyName
 *  @apiParam (Request body) {String} type
   * @apiParamExample {json} Request-Body for edit:
    *{
    "allVersionData" : [
    		{
    				"id":1,
    				"name":"Vogo2",
    				"children":[
    					{
    						"id":2,
    						"name":"A",
    						"children":[
    							{
    								"name":"B",
    								"id":4,
    								"children":[
    									{
    									"name":"C",
    									"id":8,
    									"children":[]
    								}
    								]
    							},
    							{
    								"name":"D",
    								"id":5,
    								"children":[
    									{
    									"name":"E",
    									"id":9,
    									"children":[]
    									}
    									]
    							}
    							]},
                        {
                        	"name":"F",
    						"id":3,
    						"children":[
    							{
    								"name":"G",
    								"id":6,
    								"children":[
    									{
    									"name":"H",
    									"id":10,
    									"children":[]
    									}
    									]
    							},
    							{
    								"name":"I",
    								"id":7,
    								"children":[
    									{
    									"name":"J",
    									"id":11,
    									"children":[]
    									}
    									]
    							}
    							]
    					}
    					]
    		}
    ],
    "adminId" : "5cdf8ecba8eb9ef95572416e",
    "companyName" : "royal brother",
    "type":"services"
    
    *}
 */

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



     /**
 * @api {post} {{url}}/test/api/v1/accordionForCustomer/undo/5ce80cd1456a1600172000d7?type=services  Undo Form
 * @apiGroup Accordion
 * @apiHeader {String} X-authenticated-user-token Authentication token
   * @apiParamExample {json} Listed Undo response:
  {
    "message": "Undo fetched successfully",
    "status": 200,
    "result": {
        "adminId": "5cdf8ecba8eb9ef95572416e",
        "companyName": "royal brother",
        "type": "services",
        "allVersionData": {
            "id": 1,
            "name": "Vogo",
            "children": [
                {
                    "id": 2,
                    "name": "A",
                    "children": [
                        {
                            "name": "B",
                            "id": 4,
                            "children": [
                                {
                                    "name": "C",
                                    "id": 8,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "name": "D",
                            "id": 5,
                            "children": [
                                {
                                    "name": "E",
                                    "id": 9,
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "F",
                    "id": 3,
                    "children": [
                        {
                            "name": "G",
                            "id": 6,
                            "children": [
                                {
                                    "name": "H",
                                    "id": 10,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "name": "I",
                            "id": 7,
                            "children": [
                                {
                                    "name": "J",
                                    "id": 11,
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
 */

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