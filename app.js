const express = require("express")
let bunyan = require('bunyan');
let path = require("path");
let fs = require("fs")
const bodyParser = require("body-parser")

require('dotenv').config()
require("./config")
require("./config/globalVariable")()

let router = require("./routes");

fs.existsSync("logs") || fs.mkdirSync("logs");

let app = express()

const cors = require("cors");

app.use(cors());

app.use(express.static('public'))

// app.get("/apidoc", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/apidoc/index.html"));
// })

app.use(bodyParser.json({limit:'60MB'}))
app.use(bodyParser.urlencoded({limit:'50MB',extended:false}))

app.get('/',(req,res)=>{
  res.send("hello world")
})

global.loggerObj = bunyan.createLogger({
    name: "foo",
    streams: [
      {
        type: "rotating-file",
        path: path.join(__dirname + "/logs/" + process.pid + "-all.log"),
        period: "1d", // daily rotation
        count: 3 // keep 3 back copies
      }
    ]
  });
 
global.loggerObj = bunyan.createLogger({
    name: "exceptionLogs",
    streams: [
      {
        type: "rotating-file",
        path: path.join(__dirname + "/logs/" + process.pid + "-exception.log"),
        period: "1d", // daily rotation
        count: 3 // keep 3 back copies
      }
    ]
  }); 

  if(process.env.NODE_ENV == "development"){
    app.use(express.static("apidoc"));
    app.get("/apidoc", (req, res) => {
      res.sendFile(path.join(__dirname, "/public/apidoc/index.html"));
    });
 }
 
app.all("*",(req,res,next)=>{

  if(process.env.ENABLE_BUNYAN_LOGGING == "ON"){
    loggerObj.info = {
      method:req.method,
      url:req.url,
      headers:req.headers,
      body:req.body
    }
  }

  if(process.env.ENABLE_BUNYAN_LOGGING = "ON"){
    console.log("--------------Request logs-------------------")
    console.log("Request headers",req.headers)
    console.log("Request body",req.body)
    console.log("Request url",req.url)
    console.log("Request method",req.method)
  }
  next()
})

router(app)

let server = app.listen(config.port ,()=>{
  let port = server.address().port;
  log.info("Application is running on the port:" + port);  
}) 
