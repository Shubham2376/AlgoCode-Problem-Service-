const express = require('express');

const problemRouter = require('./problems.routes')

const v1Router = express.Router();

// if any request comes and route starts with /problems we map it to ProblemRouter
v1Router.use('/problems',problemRouter)

module.exports = v1Router