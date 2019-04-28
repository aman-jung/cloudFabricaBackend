require('dotenv').config()
let MY_SLACK_TOKEN = process.env.SLACK_WEBHOOK_URL;
let slackClient = require("slack-notify")(MY_SLACK_TOKEN)

slackClient.bug('Something bad happened!'); // Posts to #bugs by default
slackClient.success('Something good happened!'); // Posts to #alerts by default
slackClient.alert('Something important happened!'); // Posts to #alerts by default
slackClient.note('Here is a note.'); // Posts to #alerts by default