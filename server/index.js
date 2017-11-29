const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const { jwtVerify } = require('./middlewares/jwt');
const { errorLogger, errorHandler } = require('./middlewares/errorHandler');
const startRoutes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  // apply middleware
  server.use(bodyParser.urlencoded({ extended: false }))

  // do the jwt verify
  jwtVerify(server);

  // define routes
  startRoutes(server);

  // next routes handlers
  server.get('*', (req, res) => {
    return handle(req, res);
  })

  // last, we do the err handler
  errorLogger(server);
  errorHandler(server);

  server.listen(8080, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:8080');
  })
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
})