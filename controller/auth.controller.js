const express = require('express');
const AuthController = express.Router();
const { sign } = require('../utils/jwt.utils');
const { signIn } = require('../services/auth.service');

AuthController.post('/sign-in', async (req, res, next) => {
    const isLoggedIn = await signIn(req.body);
    if (isLoggedIn && isLoggedIn.id) {
        const token = sign({ data: { isLoggedIn } });
        res.status(200).send({token});
    } else {
        res.status(404).send('No user found!');
    }
})

module.exports = AuthController;