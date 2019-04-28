let fs = require("fs")
let slackClient = require(ROOT +"/generics/helpers/slackCommunication")
let authenticator = require(ROOT +"/generics/helpers/middleware/authenticator")

module.exports = function(app){
    const applicationBaseUrl = process.env.APPLICATION_BASE_URL
    app.use(applicationBaseUrl,authenticator)

    let router = async function(req,res,next){
        req.params.controller += "Controller";

        if(!controllers[req.params.controller]) return next()

        else{
            try{
                var result = await controllers[req.params.controller][req.params.method](req);

                res.status(result.status?result.status:200).json({
                    message:result.message,
                    status:result.status?result.status:200,
                    result:result.result,
                    token:result.token
                })

                // if(process.env.ENABLE_BUNYAN_LOGGING == "ON"){
                //     loggerObj.info({resp:result})
                // }

                if(process.env.ENABLE_CONSOLE_LOGGING == "ON"){
                    console.log("-------Response STARTS Here ----------------")
                    console.log(result)
                    console.log("-------Response ENDs Here ----------------")
                }
            } catch(error){
                
                // res.status(error.status?error.status:400).json({
                //     status:error.status?error.status:400,
                //     message:error.message
                // })
                const toLogObject = {
                    method:req.method,
                    url:req.url,
                    headers:req.headers,
                    body:req.body,
                    errorMsg:error.message?error.message:null,
                    errorStack:error.stack?error.stack:null
                }

                slackClient.sendLogger(toLogObject)

                console.log("-------Response STARTS Here ----------------")
                console.log(error)
                console.log("-------Response ENDs Here ----------------")
            }
        }
        
    }

    app.all(applicationBaseUrl +"/api/:controller/:method",router)
    app.all(applicationBaseUrl +"/api/:controller/:method/:id",router)
}