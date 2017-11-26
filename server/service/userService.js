const UserDao = require('../dao/userDao');
const userDao = new UserDao();

class UserSevice {
  async getListByName(name = '') {
    const users = await userDao.getListByName(name);
    return users;
  }
}

module.exports = UserSevice;