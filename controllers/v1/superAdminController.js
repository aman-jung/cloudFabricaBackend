module.exports = class SuperAdmin extends Abstract{
    constructor(){
        super(superAdminSchema)
    }

    /**
 * @api {get} /tasks List all tasks
 * @apiGroup Tasks
 * @apiSuccess {Object[]} tasks Task's list
 * @apiSuccess {Number} tasks.id Task id
 * @apiSuccess {String} tasks.title Task title
 * @apiSuccess {Boolean} tasks.done Task is done?
 * @apiSuccess {Date} tasks.updated_at Update's date
 * @apiSuccess {Date} tasks.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "title": "Study",
 *      "done": false
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 */
    async create(req){
        return new Promise(async (resolve,reject)=>{
            try{
                let superAdmin = await database.models.superAdmin.findOne({email:req.body.email}).lean()

                if(superAdmin){
                    throw "Email Id already exists"
                }else{ 
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                    superAdmin = await database.models.superAdmin.create(
                        {
                            name:req.body.name,
                            email:req.body.email,
                            password:req.body.password,
                            type:req.body.type,
                            createdAt:new Date()
                        }
                    )
                    
                    return resolve({
                        message:"Information saved successfully",
                        result:superAdmin
                    })
                }
            }catch(error){
                return reject({message:error})
            }
        })
    }
    
    async verify(req){
        let tokenValidate = await gen.utils.loginUser("superAdmin",req.body)
        return tokenValidate
    }
}