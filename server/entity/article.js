const Sequelize = require('sequelize');
const sequelize = require('../dao/daoHelper');

const Article = sequelize.define('article', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
});

module.exports = Article;