const mongoose = require('mongoose')
const urlMongo = process.env.DATA_BASE

const connect = async () => {
    try {
        await mongoose.connect(urlMongo);
        console.log("successful connection ")
    } catch (error) {
     console.log("Eroor connecting to MongoDB")   
    }
}

module.exports = connect