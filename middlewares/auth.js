const jwtUtil = require('../utils/jwt.utils')
const whitelist = [
    '/sign-auth',
    '/login',
    '/register'
];

module.exports = (req, res, next) => {
    const _barerToken = req.authorization.token || req.authorisation.token || req.Authorization.token || req.authorization.token;
    const token = _barerToken.split(' ')[1];
    const payload = {
        token: token
    }
    const isVerified = jwtUtil.verify(payload);
    if (isVerified === true || isVerified === 'true') {
        next();
        return;
    } else {
        next();
        res.status(401).send({
            message: 'You are not authorized to process this request.'
        })
    }
}
