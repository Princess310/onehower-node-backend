const baseRoute = require('./base');
const userRoute = require('./user');
const groupRoute = require('./group');
const momentRoute = require('./moment');

const routes = ['/user', '/group', '/article', '/comment', '/moment', '/song'];
const startRoutes = (app) => {
  app.use(routes, baseRoute);
  app.use('/user', userRoute);
  app.use('/group', groupRoute);
  app.use('/moment', momentRoute);
};

module.exports = startRoutes;