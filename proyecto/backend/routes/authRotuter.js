const express = require('express')
const router = express.Router()

const {signUp, loginUser} = require("../controllers/loginController")
const { verification } = require('../middelwares/auht')

router.post("/signup", signUp)
router.post("/login",  loginUser)

module.exports = router