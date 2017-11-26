const GroupDao = require('../dao/groupDao');
const groupDao = new GroupDao();

class groupSevice {
  async getGroupsAndUsers(name = '') {
    const groups = await groupDao.getGroupsAndUsers(name);
    return groups;
  }
}

module.exports = groupSevice;