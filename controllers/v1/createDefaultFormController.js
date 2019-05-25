module.exports = class CreateDefaultForm extends Abstract{
    
    constructor(){
        super(createDefaultFormSchema)
    }

          /**
 * @api {get} {{url}}/test/api/v1/createDefaultForm/listDefaultForm  Create Default form for all admin
* @apiVersion 0.0.1
* @apiGroup Create Default form
* @apiHeader {String} X-authenticated-user-token Authentication token
*  @apiParamExample {json} Response:
     
* {
    "message": "Default form fetched successfully",
    "status": 200,
    "result": {
        "type": "defaultForm",
        "formResult": {
            "id": 1,
            "name": "Default Form",
            "children": [
                {
                    "id": 2,
                    "name": "Default Parent1",
                    "children": [
                        {
                            "id": 4,
                            "name": "Default Children1",
                            "children": [
                                {
                                    "id": 8,
                                    "name": "Default sub-children1",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 5,
                            "name": "Default Children2",
                            "children": [
                                {
                                    "id": 9,
                                    "name": "Default sub-children2",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Default Parent2",
                    "children": [
                        {
                            "id": 6,
                            "name": "Default Children3",
                            "children": [
                                {
                                    "id": 10,
                                    "name": "Default sub-children3",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 7,
                            "name": "Default Children4",
                            "children": [
                                {
                                    "id": 11,
                                    "name": "Default sub-children4",
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
*}
*/

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