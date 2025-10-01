const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    name: {
        type: String,
        required: true,
        minlength : [3, "The name must be at least 3 characters long." ]
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    city:{
        type: String
    },
    numberPhone: {
        type: String
    },
    favoritesDonuts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Donuts"
    },
    
}, {timestamps: true})

const userModel = mongoose.model("User", userSchema, "user")

module.exports = userModel