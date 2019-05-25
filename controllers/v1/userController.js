module.exports = class User extends Abstract{

    constructor(){
        super(userSchema)
    }


/**
 * @api {post} {{url}}/test/api/v1/user/create  Create admin 
 * @apiGroup Sign up Admin
 * @apiParam (Request body) {String} companyName Name of the company
 * @apiParam (Request body) {String} email company email
 * @apiParam (Request body) {String} password 
 * @apiParam (Request body) {String} role Role should be - admin 
 * @apiParam (Request body) {String} createdAt Date at which this api is created
 * @apiParam (Request body) {Object} userInformation userInformation Object consists of personOfContact and personOfContactEmail field
 * @apiParamExample {json} Request-Body:
    *{
* "companyName":"royal brother",
* "email":"customerExecutive@customer.com",
* "password":"customer",
* "role":"customerExecutive",
* "userInformation":{
* 	"personOfContact":Aman,
*	"personOfContactEmail":"aman@gmail.com",
* }
    *}
 * @apiDescription Api for creating admin
 */

 /**
 * @api {post} {{url}}/test/api/v1/user/create  Create customerExecutive 
 * @apiGroup Sign up Customer Executive
 * @apiParam (Request body) {String} companyName  Name of the company
 * @apiParam (Request body) {String} email  company email
 * @apiParam (Request body) {String} password
 * @apiParam (Request body) {String} role Role should be - customerExecutive
 * @apiParam (Request body) {String} createdAt Date at which this api is created
 * @apiParam (Request body) {Object} userInformation Object should have - employeeId,department-eg:billing,etc,firstName,lastName 
  * @apiParamExample {json} Request-Body:
    *{
* "companyName":"royal brother",
* "email":"customerExecutive@customer.com",
* "password":"customer",
* "role":"customerExecutive",
* "userInformation":{
* 	"employeeId":1234,
*	"department":"Billing",
*	"firstName":"Raunak",
*	"lastName":"Ag"
* }
    *}
 */

    async create(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let user = await database.models.user.findOne({email:req.body.email}).lean()

                if(user){
                    throw "Email Id already exists"
                }else{ 
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                    user = await database.models.user.create(
                        {
                            companyName:req.body.companyName,
                            email:req.body.email,
                            password:req.body.password,
                            role:req.body.role,
                            userInformation:req.body.userInformation,
                            createdAt:new Date()
                        }
                    )
                    
                    return resolve({
                        message:"Information saved successfully",
                        result:user
                    })
                }
            }catch(error){
                return reject({message:error})
            }
        })
    }
    

     /**
 * @api {post} {{url}}/test/api/v1/user/verify  Verify Admin/customerExecutive/superAdmin 
 * @apiGroup Log In
 * @apiParam (Request body) {String} email
 * @apiParam (Request body) {String} password
   * @apiParamExample {json} Request-Body:
    *{
* "email":"a@gmail.com",
* "password":"*****",
    *}
 */

    async verify(req){
       
    return new Promise(async (resolve,reject)=>{

        try{

        let userVerify = await database.models.user.findOne({email:req.body.email}).lean()

        if(!userVerify){
           throw("Invalid email or password")   
        }

        let passwordValidate = await bcrypt.compare(req.body.password,userVerify.password)

        if(!passwordValidate){
            throw("Invalid email/Password")
        }

        var token = jwt.sign({_id:userVerify._id,role:userVerify.role,companyName:userVerify.companyName}, "PrivateKey",{
            expiresIn: 60*60*24 
        });

        return resolve({    
            success:true,
            message:"token generated successfully",
            token:token,
            companyName:userVerify.companyName
        })
    } catch(error){
        return reject({
            message:error
        })
    }
    })
    }

}   