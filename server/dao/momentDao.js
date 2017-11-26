const daoHelper = require('./daoHelper');
const BaseDao = require('./baseDao');
const Moment = require('../entity/moment');
const Artcle = require('../entity/article');

class MomentDao extends BaseDao {
  constructor() {
    super(Moment);
  }

  async getListByName(name = '') {
    const moments = await this.list({}, {
      include: [{
        model: Artcle,
      }],
    });
    return moments;
  }
}

module.exports = MomentDao;
