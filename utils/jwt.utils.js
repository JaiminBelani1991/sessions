require('dotenv').config();
const jwt = require('jsonwebtoken');

const sign = (payload) => {
    return jwt.sign(payload.data, process.env.CIPHER, { algorithm: 'HS256', expiresIn: '1d' })
}

const decode = (payload) => {
    return jwt.decode(payload.token);
}

const verify = (payload) => {
    return jwt.verify(payload.token, process.env.CIPHER);
}

module.exports = {
    sign,
    decode,
    verify
}