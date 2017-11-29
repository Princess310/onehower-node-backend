const crypto = require('crypto');
const SALT = 'qRkVBkLwJWy2fAmXNCVDDJxxR3tuNMJiKXvcTGJQGeszN';

class PasswordSevice {
  encrypt(clearPwd) {
    const hash = crypto.createHmac('sha256', SALT + clearPwd).digest('hex');
    return hash;
  }

  check(clearPwd, referencePwd) {
    if (!clearPwd || !referencePwd) {
      return false;
    }

    return this.encrypt(clearPwd) === referencePwd;
  }
}

module.exports = PasswordSevice;