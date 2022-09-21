const express = require('express');
const RootRoutes = express.Router();
const pkg = require('./package.json');
// const { UserRoutes } = require('./routes/user.route');

const baseRoute = `/apis/v${parseInt(pkg.version)}`;

// RootRoutes.use(`${baseRoute}/users`, UserRoutes);

module.exports = { RootRoutes };