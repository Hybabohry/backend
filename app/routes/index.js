'use strict';

const errorHandlingMiddleware = require('../lib/error-handling-middleware');
const usersRouter = require('./users');
const authRouter = require('./auth');
const statsRouter = require('./stats')

module.exports = (app) => {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/stats',statsRouter);
  //app.use('/api/v1/users', usersRouter);
  app.use(errorHandlingMiddleware);
};
