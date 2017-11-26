const Sequelize = require('sequelize');
const sequelize = require('../dao/daoHelper');

const User = sequelize.define('user', {
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  avatar: Sequelize.STRING,
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;