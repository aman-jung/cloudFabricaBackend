module.exports = class SuperAdmin extends Abstract{
    constructor(){
        super(userSchema)
    }

         /**
 * @api {get} {{url}}/test/api/v1/admin/listCustomerExecutive?companyName=airtel  List Customer Executive 
 * @apiGroup List Customer executive
 * @apiHeader {String} X-authenticated-user-token Authentication token
   * @apiParamExample {json} Response:
    *{
    "message": "Customer Executive fetched successfully",
    "status": 200,
    "result": [
        {
            "companyName": "airtel",
            "email": "airtelfirst@airtelfirst.com",
            "role": "customerExecutive",
            "userInformation": {
                "Employee Id": 1,
                "Department": "Billing",
                "First Name": "Raunak",
                "Last Name": "Agrawal"
            },
            "createdAt": "2019-05-19T16:03:29.839Z"
        },
        {
            "companyName": "airtel",
            "email": "airtelsecond@airtelsecond.com",
            "role": "customerExecutive",
            "userInformation": {
                "Employee Id": 1,
                "Department": "Billing",
                "First Name": "Raunak",
                "Last Name": "Agrawal"
            },
            "createdAt": "2019-05-19T16:04:40.894Z"
        },
        {
            "companyName": "airtel",
            "email": "idea@idea.com",
            "role": "customerExecutive",
            "userInformation": {
                "Employee Id": "1",
                "Department": "schedule",
                "First Name": "aman",
                "Last Name": "karki"
            },
            "createdAt": "2019-05-19T16:16:31.149Z"
        }
    ]

    *}
 */

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