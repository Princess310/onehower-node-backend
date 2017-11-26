const Sequelize = require('sequelize');
const sequelize = require('../dao/daoHelper');
const User = require('./user');

const Comment = sequelize.define('comment', {
  content: Sequelize.TEXT,
  pid: Sequelize.INTEGER,
});

// so, one comment should have one user owner
Comment.belongsTo(User);

module.exports = Comment;