const Response = require('../routes/response');

const errorLogger = (app) => {
  app.use((err, req, res, next) => {
    // we can do some err logger here.
    next(err);
  });
}

const errorHandler = (app) => {
  app.use((err, req, res, next) => {
    const response = new Response();
    res.send(response.fail(err));
  });
};

module.exports = {
  errorLogger,
  errorHandler,
};