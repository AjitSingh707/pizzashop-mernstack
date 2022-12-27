const mongoose = require("mongoose")

const pizzaSchema = new mongoose.Schema({
    name:{
        type: String,required: true
    },
    varients: [],
    prices: [],
    category:{
        type: String,required: true
    },
    image:{
        type: String,required: true
    },
    description:{type: String,required: true}
},{timestamps: true})

pizzaSchema.methods.aava = function(){
    console.log("kam karat h ")
    return 'hn karat h'
}

const Pizza =  mongoose.model('Pizza',pizzaSchema)

module.exports = Pizza