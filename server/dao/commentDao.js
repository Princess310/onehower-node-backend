const daoHelper = require('./daoHelper');
const BaseDao = require('./baseDao');
const Comment = require('../entity/comment');

class CommentDao extends BaseDao {
  constructor() {
    super(Comment);
  }
}

module.exports = CommentDao;
