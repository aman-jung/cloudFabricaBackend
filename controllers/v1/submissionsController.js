

module.exports = class Submissions extends Abstract{
    
    constructor(){
        super(submissionsSchema)
    }

                /**
 * @api {post} {{url}}/test/api/v1/submissions/make make submission
 * @apiGroup submissions
 * @apiHeader {String} X-authenticated-user-token Authentication token
 *   @apiParamExample {json}  body response:
 {
	"id":[2,4]
}
* @apiParamExample {json} Listed submission response:
   {
    "message": "Submissions saved successfully",
    "status": 200,
    "result": {
        "submissions": [
            {
                "name": "A",
                "id": 2,
                "hierarchyLevel": 0
            },
            {
                "name": "B",
                "id": 4,
                "hierarchyLevel": 1
            }
        ],
        "_id": "5cf644a37602972b50f3711b",
        "userDetails": {
            "submittedBy": 1234,
            "Department": "services",
            "fName": "Raunak",
            "lName": "Ag",
            "adminId": "5cdf8ecba8eb9ef95572416e"
        },
        "createdAt": "2019-06-04T10:14:55.931Z",
        "__v": 0
    }
}
*@apiDescription If id is not given it will throw you an error.
 */

    async make(req){
        
        return new Promise(async (resolve,reject)=>{

            try{

                if(!req.body.id){
                    throw "Id is required."
                } else{

                   let userDocuments = await database.models.user.findOne({
                       _id:req.userDetails._id
                   },{userInformation:1,companyName:1,email:1}).lean()

                   if(!userDocuments){
                       throw "User is not present in database"
                   } else{

                    let childrenValue = []

                    function formDataValue(formData,id,index){
                
                        if(formData.id === id){
                            childrenValue.push({
                                name:formData.name,
                                id:formData.id,
                                hierarchyLevel:index
                            })
                
                            return childrenValue;
                        } else{
                
                            if(formData.children.length>0){
                                formData.children.forEach(eachChildren=>{
                                    formDataValue(eachChildren,id,index)
                                })
                            }
                        }
                
                    }
                    
                    let resultDocument = await database.models.createDefaultForm.findOne({
                        adminId:userDocuments.userInformation.adminId,
                        type:userDocuments.userInformation.Department,
                        companyName:userDocuments.companyName
                    },{"formResult":1}).lean()

                    let currentEditedForm = resultDocument.formResult[resultDocument.formResult.length-1]
                    let allIds = req.body.id

                    for(let pointerToAllIds=0;pointerToAllIds<allIds.length;pointerToAllIds++){
                        formDataValue(currentEditedForm,allIds[pointerToAllIds],pointerToAllIds)
                    }

                    let submissionObject = {
                        userDetails:{
                            submittedBy:userDocuments.userInformation["Employee Id"],
                            Department:userDocuments.userInformation.Department,
                            fName:userDocuments.userInformation["First Name"],
                            lName:userDocuments.userInformation["Last Name"],
                            adminId:userDocuments.userInformation.adminId
                        },
                        submissions:childrenValue,
                        createdAt:new Date()
                    }

                    let submissionDocument = await database.models.submissions.create(submissionObject)

                    return resolve({
                        message:"Submissions saved successfully",
                        result:submissionDocument
                    })
                   }
                }

            } catch(error){

                return reject({
                    message:error
                })
            }

        })
    }

}