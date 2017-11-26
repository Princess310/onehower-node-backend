const MomentDao = require('../dao/momentDao');
const momentDao = new MomentDao();

class MomentSevice {
  async getListByName(name = '') {
    const moments = await momentDao.getListByName(name);
    return moments;
  }
}

module.exports = MomentSevice;