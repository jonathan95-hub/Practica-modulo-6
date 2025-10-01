const jwt = require('jsonwebtoken')

const generateToken = (payload, isRefresh) => {
    if(isRefresh){
        return jwt.sign(payload, process.env.SECRET_TOKEN_REFRESH, {expiresIn: '60min'})
    }
    return jwt.sign(payload, process.env.SECRET_TOKEN, {expiresIn: '15min'})
}

module.exports = generateToken