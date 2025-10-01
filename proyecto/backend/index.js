const express = require('express');
require(`dotenv`).config()
const cors = require('cors')
const connection = require('./conecctionDataBase/connectionMongo')
const app = express()
const donutsRouter = require("./routes/donutRouter")
const loginRouter = require('./routes/authRotuter')
const userRouter = require("./routes/userRouter")


app.use(cors())

connection()

// rutas
app.use(express.json());
app.use("/shopdonuts/donuts", donutsRouter)
app.use("/shopdonuts/auth", loginRouter)
app.use("/shopdonuts/user", userRouter)
app.listen(3000, () => {
    console.log('servidor en marcha http://localhost:3000')
})