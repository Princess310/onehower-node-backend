class Response {
  constructor(result = {}, success = true, code = 200) {
    this.result =result;
    this.success = success;
    this.code = code;
  }

  success(result = {}) {
    return this.setSuccess(true).setCode(200).setResult(result);
  }

  fail(err) {
    return this.setSuccess(false).setCode(604).setResult(err);
  }

  // Accessors
  getSuccess() {
    return this.success;
  }

  setSuccess(success = true) {
    this.success = success
    return this;
  }

  getCode() {
    return this.code;
  }

  setCode(code = 200) {
    this.code = code;
    return this;
  }

  getResult() {
    return result;
  }

  setResult(result = {}) {
    this.result = result;
    return this;
  }
}

module.exports = Response;