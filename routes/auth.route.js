const express = require('express');
const authRoutes =  express.Router();
const AuthController = require('../controller/auth.controller');

authRoutes.use('/', AuthController);

module.exports = authRoutes;