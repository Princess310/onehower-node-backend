const Sequelize = require('sequelize');
const sequelize = require('../dao/daoHelper');
const Article = require('./article');
const comment = require('./comment');

const Moment = sequelize.define('moment', {
  type: Sequelize.STRING,
  content: Sequelize.TEXT,
  pictures: Sequelize.TEXT,
  audio: Sequelize.STRING,
  video: Sequelize.STRING,
});

// one moment maybe have one article link
Moment.belongsTo(Article);

// one moment should have many comments
Moment.hasMany(comment);

module.exports = Moment;