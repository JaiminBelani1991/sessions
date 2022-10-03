const express = require('express');
const RootRoutes = express.Router();
const jwtAuthMiddleware = require('./middlewares/auth')
const pkg = require('./package.json');
const userRoutes = require('./routes/user.route');
const IMDBRoutes = require('./routes/imdb.route');
const AuthRoutes = require('./routes/auth.route');

RootRoutes.use(`/apis/v${parseInt(pkg.version)}/users`, jwtAuthMiddleware, userRoutes);
RootRoutes.use(`/apis/v${parseInt(pkg.version)}/imdb`, jwtAuthMiddleware, IMDBRoutes);
RootRoutes.use(`/apis/v${parseInt(pkg.version)}/auth`, AuthRoutes);

module.exports = RootRoutes;