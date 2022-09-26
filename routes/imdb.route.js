const express = require('express');
const IMDBRoutes =  express.Router();
const IMDBController = require('../controller/imdb.controller');

IMDBRoutes.use('/actors', IMDBController);

module.exports = IMDBRoutes;