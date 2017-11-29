const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyMethods = ['PUT', 'DELETE', 'POST'];
const publicRoutes = ['/user/login', '/user/register'];
const Response = require('../routes/response');

const X_Access_Token = 'X-Access-Token';
const ACCESS_MESSAGE = 'You do not login or do not have the right access permission';

const jwtUtil = {
  sign: function(payload) {
    return jwt.sign({
      data: payload,
      exp: Math.floor(Date.now() / 1000) + config.jwt.exp,
    }, config.jwt.secret);
  },
  verify: function(token) {
    return jwt.verify(token, config.jwt.secret);
  },
  verifyUser: function(token) {
    const { data: { uid } } =  jwtUtil.verify(token);
    // and we can do some token refresh things here.

    return {
      uid,
    };
  },
  // we do all about jwt verify things here.
  jwtVerify: function(app) {
    app.use('*', (req, res, next) => {
      const { method, baseUrl } = req;
      let checkFlag = true;

      // some routes no need to verify, like some created things by AD page.
      if (!publicRoutes.includes(baseUrl)) {
        // then, do the verify for put, delete, post things
        if (verifyMethods.includes(method)) {
          const token = req.header(X_Access_Token);

          if (token) {
            const decoded = jwtUtil.verifyUser(token);
            
            // so, if do not get the uid for user, we think it not access
            if (!decoded && !decoded.uid) checkFlag = false;
          } else {
            checkFlag = false;
          }

          if (!checkFlag) {
            const response = new Response();
            res.send(response.fail({
              message: ACCESS_MESSAGE,
            }));
          }
        }
      }

      // only verify the route, then do next things
      checkFlag && next();
    });
  },
  // more, we can do authenticate middleware here
};

module.exports = jwtUtil;
