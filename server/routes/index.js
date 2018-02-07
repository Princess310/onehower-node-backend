const baseRoute = require('./base');
const userRoute = require('./user');
const groupRoute = require('./group');
const momentRoute = require('./moment');

const xcodeRoute = require('../xcode/route');

const routes = ['/user', '/group', '/article', '/comment', '/moment', '/song'];
const startRoutes = (app) => {
  app.use(routes, baseRoute);
  app.use('/user', userRoute);
  app.use('/group', groupRoute);
  app.use('/moment', momentRoute);
  app.use('/xcode', xcodeRoute)
};

module.exports = startRoutes;