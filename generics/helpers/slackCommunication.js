let MY_SLACK_TOKEN = process.env.SLACK_WEBHOOK_URL;
let slackClient = require("slack-notify")(MY_SLACK_TOKEN)


const sendLogger = function(logger){

    if(SLACK_COMMUNICATION_ON_OFF = "ON"){
        let fieldsData = new Array
        let attachmentData = new Array

        Object.keys(_.pick(logger,["host","method","statusCode","statusMessage","url","errorMsg","erroStack"])).forEach(eachLogger=>[
            fieldsData.push({
                title:eachLogger,
                value:logger[eachLogger],
                short:false
            })
        ])

        Object.keys(logger.body).forEach(eachLoggerBody=>{
            if(["password"].indexOf(eachLoggerBody) === -1){
            fieldsData.push({
                title:eachLoggerBody,
                value:logger.body[eachLoggerBody],
                short:false
            })
        }
        })

        Object.keys(logger.customFields).forEach(eachCustomField=>{
            fieldsData.push({
                title:eachCustomField,
                value:logger.customFields[eachCustomField],
                short:false
            })
        })

        let attachment = {
            color: "#36a64f",
            text: "More information below",
            fields: fieldsData
      }
      attachmentData.push(attachment)

      var options = {
          text: "Exception Logs",
          attachments: attachmentData
    }
      slackClient.alert(options)
    }
}

module.exports = {
    sendLogger:sendLogger
}