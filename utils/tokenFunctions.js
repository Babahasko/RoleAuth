require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateAccessToken(id, roles) {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {expiresIn: '1d'});
}

module.exports = {
    generateAccessToken,
}