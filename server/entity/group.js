const Sequelize = require('sequelize');
const sequelize = require('../dao/daoHelper');

const Group = sequelize.define('group', {
  name: {
    type: Sequelize.STRING
  }
});  


module.exports = Group;