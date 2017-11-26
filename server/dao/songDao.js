const daoHelper = require('./daoHelper');
const BaseDao = require('./baseDao');
const Song = require('../entity/song');

class SongDao extends BaseDao {
  constructor() {
    super(Song);
  }
}

module.exports = SongDao;
