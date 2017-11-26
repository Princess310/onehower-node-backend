const Sequelize = require('sequelize');
const sequelize = require('../dao/daoHelper');

const Group = require('./group');
const User = require('./user');

const UserGroup = sequelize.define('user_group');

User.belongsToMany(Group, { through: UserGroup });
Group.belongsToMany(User, { through: UserGroup });

module.exports = UserGroup;