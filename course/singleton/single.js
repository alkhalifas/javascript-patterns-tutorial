let instance;

exports.Logger = class Logger {
  constructor() {
    if(!instance) {
      instance = this;
    }
    return instance;
  }

  log(msg) {
    this.msg = msg;
  }

  show() {
    return this.msg;
  }
}
