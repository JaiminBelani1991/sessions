const express = require('express');
const RootRoutes = express.Router();
const pkg = require('./package.json');
const userRoutes = require('./routes/user.route');

RootRoutes.use(`/apis/v${parseInt(pkg.version)}/users`, userRoutes);

module.exports = RootRoutes;