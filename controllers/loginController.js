module.exports = class Login extends Abstract{
    constructor(){
        super(loginSchema)
    }

    /**
 * @api {get} /tasks/:id Find a task
 * @apiGroup Tasks
 * @apiParam {id} id Task id
 * @apiSuccess {Number} id Task id
 * @apiSuccess {String} title Task title
 * @apiSuccess {Boolean} done Task is done?
 * @apiSuccess {Date} updated_at Update's date
 * @apiSuccess {Date} created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": 1,
 *      "title": "Study",
 *      "done": false
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }
 * @apiErrorExample {json} Task not found
 *    HTTP/1.1 404 Not Found
 * @apiErrorExample {json} Find error
 *    HTTP/1.1 500 Internal Server Error
 */

    async fetch(req){
        return new Promise(async (resolve,reject)=>{
            try{
                    let loginDocument = await database.models.user.find({})
                    let responseMessage = "Login Information Fetched Successfully"
                    return resolve({message:responseMessage,result:loginDocument})
                }
            catch(err){
                return reject({message:err})
            }
        })
    }
}
