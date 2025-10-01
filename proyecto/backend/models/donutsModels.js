const mongoose = require('mongoose')
const schema = mongoose.Schema

const donutSchema = new schema({
    name:{
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        
    },
     
},
{timestamps:true})

const donutsModel = mongoose.model("Donuts", donutSchema, "donuts");

module.exports = donutsModel