let db_connect = (config)=>{
global.database = require("./dbConfig")(config.DB_config.mongodb_connection)
global.ObjectId = database.ObjectId
}

let configuration = {
    // host:process.env.HOST,
    port:process.env.PORT || 4201,
    log: "debug",
    DB_config:{
        mongodb_connection:{
            host:process.env.MONGODB_URL,
            database:process.env.DB,
            options:{
                useNewUrlParser:true
            }
        }
    }
}

db_connect(configuration)

module.exports = configuration