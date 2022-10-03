const jwtUtil = require('../utils/jwt.utils')
const whitelist = [
    '/sign-auth',
    '/login',
    '/register'
];

module.exports = (req, res, next) => {
    const _barerToken = req && req.headers && req.headers.authorization || null;
    if(_barerToken !== null) {
        const token = _barerToken.split(' ')[1];
        const payload = {
            token: token
        }
        const isVerified = jwtUtil.verify(payload);
        if (isVerified && isVerified.isLoggedIn && isVerified.isLoggedIn.id) {
            next();
            return;
        } else {
            next();
            res.status(401).send({
                message: 'You are not authorized to process this request.'
            })
        }
    } else {
        res.status(400).send({
            message: 'Token not supplied'
        })
    }
    
}
