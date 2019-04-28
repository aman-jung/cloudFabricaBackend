let Abstract = class Abstract{
    constructor(schema){
    this.model = database.createModel(schema)
    // this.schema = schema.name
    }
}


module.exports = Abstract;