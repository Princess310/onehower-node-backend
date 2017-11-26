const daoHelper = require('./daoHelper');
const BaseDao = require('./baseDao');
const User = require('../entity/user');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class UserDao extends BaseDao {
  constructor() {
    super(User);
  }

  async getListByName(name) {
    const users = await this.list({
      [Op.or]: [
        {
          firstName: {
            [Op.like]: `%${name}%`,
          },
        }, {
          lastName: {
            [Op.like]: `%${name}%`,
          },
        }
      ],
    });
    return users;
  }
}

module.exports = UserDao;
