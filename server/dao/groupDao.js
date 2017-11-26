const daoHelper = require('./daoHelper');
const BaseDao = require('./baseDao');
const Group = require('../entity/group');
const User = require('../entity/user');
const GroupUser = require('../entity/groupUser');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class GroupDao extends BaseDao {
  constructor() {
    super(Group);
  }

  async getGroupsAndUsers(name = '') {
    const groups = await this.list({
      name: {
        [Op.like]: `%${name}%`,
      },
    }, {
      include: [{
        model: User,
        through: GroupUser,
      }],
    });

    return groups;
  }
}

module.exports = GroupDao;
