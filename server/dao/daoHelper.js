const Sequelize = require('sequelize');
const config = require('../config');

const { server, port, name, user, pwd, pool } = config.db;

const sequelize = new Sequelize(name, user, pwd, {
  host: server,
  port,
  dialect: 'postgres',
  pool,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;