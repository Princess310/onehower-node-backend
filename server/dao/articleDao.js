const daoHelper = require('./daoHelper');
const BaseDao = require('./baseDao');
const Article = require('../entity/article');

class ArticleDao extends BaseDao {
  constructor() {
    super(Article);
  }
}

module.exports = ArticleDao;
