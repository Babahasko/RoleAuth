require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateAccessToken(id, roles) {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {expiresIn: '1d'});
}

function checkAccessToken(token) {
    return jwt.verify(token, process.env.SECRET_ACCESS_TOKEN);
}

module.exports = {
    generateAccessToken,
    checkAccessToken,
}
