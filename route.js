const express = require('express');
const RootRoutes = express.Router();
const pkg = require('./package.json');
const userRoutes = require('./routes/user.route');
const IMDBRoutes = require('./routes/imdb.route')

RootRoutes.use(`/apis/v${parseInt(pkg.version)}/users`, userRoutes);
RootRoutes.use(`/apis/v${parseInt(pkg.version)}/imdb`, IMDBRoutes);

module.exports = RootRoutes;