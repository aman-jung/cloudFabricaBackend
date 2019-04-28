let MY_SLACK_TOKEN = process.env.SLACK_WEBHOOK_URL;
let slackClient = require("slack-notify")(MY_SLACK_TOKEN)

const sendLogger = function(logger){

    if(SLACK_COMMUNICATION_ON_OFF = "ON"){
        let fieldsData = new Array
        let attachmentData = new Array

        Object.keys(logger).forEach(eachLogger=>[
            fieldsData.push({
                title:eachLogger,
                value:logger[eachLogger],
                short:false
            })
        ])

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


    // slackClient.alert({
    //     text: 'Current server stats',
    //     attachments: [
    //       {
    //         fallback: 'Required Fallback String',
    //         fields: [
    //           { title: 'CPU usage', value: '7.51%', short: true },
    //           { title: 'Memory usage', value: '254mb', short: true }
    //         ]
    //       }
    //     ]
    //   });
      slackClient.alert(options)
    }
    // slackClient.bug('Something bad happened!'); // Posts to #bugs by default
    // slackClient.success('Something good happened!'); // Posts to #alerts by default
    // slackClient.alert('Something important happened!'); // Posts to #alerts by default
    // slackClient.note('Here is a note.'); // Posts to #alerts by default
}

module.exports = {
    sendLogger:sendLogger
}