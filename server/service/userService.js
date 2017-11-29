const UserDao = require('../dao/userDao');
const userDao = new UserDao();
const jwt = require('../middlewares/jwt');
const PasswordSevice = require('./passwordService');

const WRONG_CREDENTIAL = 'User name or password invalid';
const CANNOT_REGISTER_USERNAME_ALREADY_EXIST = 'Username already exis';

class UserSevice {
  async getListByName(name = '') {
    const users = await userDao.getListByName(name);
    return users;
  }

  async register(username = '', password = '') {
    const passwordService = new PasswordSevice();
    const encryptPwd = passwordService.encrypt(password);
    const user = await userDao.getByUsername(username);
    
    if (user !== null) {
      throw Error(CANNOT_REGISTER_USERNAME_ALREADY_EXIST);
    }

    const newUser = await userDao.create({
      username,
      password: encryptPwd,
    });

    return this.login(username, password);
  }

  async login(username = '', password = '') {
    const passwordService = new PasswordSevice();
    const user = await userDao.getByUsername(username);

    if (!passwordService.check(password, user.password)) {
      throw Error(WRONG_CREDENTIAL);
    }

    // then, we build the token for user
    const access_token = jwt.sign({
      uid: user.id,
    });

    return {
      user,
      access_token,
    };
  }
}

module.exports = UserSevice;