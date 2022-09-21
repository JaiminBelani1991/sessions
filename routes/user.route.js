const express = require('express');
const userRoutes =  express.Router();

userRoutes.use('/', null);

module.exports = { userRoutes }