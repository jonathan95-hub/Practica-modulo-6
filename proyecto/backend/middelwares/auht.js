const jwt = require('jsonwebtoken')

const verification = async (req, res, next) => {
    const token = req.header("token")
    if(!token){
        return res.status(401).send({message: 'Access denied'})
    }
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN)
        req.payload = payload
        next()
    } catch (error) {
        try {
            const payload = jwt.verify(payload, process.env.SECRET_TOKEN_REFRESH)
            req.payload = payload
            next()
        } catch (error) {
            res.status(500).send("Token is not valid");
        }        
    }
}

const verifyAdmin = async (req, res, next) => {
    try {
        const payload = req.payload
        if(payload.role === "user"){
            return res.status(401).send({status: 'Failed', message: 'Access denied'})
        }
        next()
    } catch (error) {
         res.status(500).send("Token is not valid");
    }
}

module.exports = {verification, verifyAdmin}