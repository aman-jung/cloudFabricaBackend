// let fs = require("fs")
let slackClient = require(ROOT +"/generics/helpers/slackCommunication")
let authenticator = require(ROOT +"/generics/helpers/middleware/authenticator")

module.exports = function(app){
    const applicationBaseUrl = process.env.APPLICATION_BASE_URL
    app.use(applicationBaseUrl,authenticator)

    let router = async function(req,res,next){
        req.params.controller += "Controller";

        if(!controllers[req.params.version]) return next()
        if(!controllers[req.params.version][req.params.controller])return next()
        if(!controllers[req.params.version][req.params.controller][req.params.method]) return next()

        else{
            try{
                var result = await controllers[req.params.version][req.params.controller][req.params.method](req);

                res.status(result.status?result.status:200).json({
                    message:result.message,
                    status:result.status?result.status:200,
                    result:result.result,
                    token:result.token,
                    type:result.type,
                    name:result.name
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
                
                let customFields = {
                        message:"NON_LOGGED_IN_USER"
                  }

                res.status(error.status?error.status:400).json({
                    status:error.status?error.status:400,
                    message:error.message
                })

                if(req.userDetails){
                    customFields={
                        message:"LOGGED_IN_USER",
                        ["Company Name"]:req.userDetails.companyName,
                        Email:req.userDetails.email,
                        role:req.userDetails.role
                    }    

                }

                const toLogObject = {
                    method:req.method,
                    url:req.url,
                    statusCode:res.statusCode,
                    statusMessage:res.statusMessage,
                    // contentType:req.headers.content-type,
                    host:req.headers.host,
                    body:req.body,
                    errorMsg:error.message.message?error.message.message:null,
                    customFields:customFields,
                    erroStack:error.message.stack?error.message.stack:null
                }

                slackClient.sendLogger(toLogObject)

                console.log("-------Response STARTS Here ----------------")
                console.log(error)
                console.log("-------Response ENDs Here ----------------")
            }
        }
        
    }

    app.all(applicationBaseUrl +"/api/:version/:controller/:method",router)
    app.all(applicationBaseUrl +"/api/:version/:controller/:method/:id",router)
}