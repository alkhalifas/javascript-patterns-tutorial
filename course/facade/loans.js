const Mortgage = function(name) {
  this.name = name;
}

Mortgage.prototype = {
  request: function(amount) {
    if(!new Account().has(amount)) return "rejected";
    else if(!new Credit().history(this.name)) return "rejected";
    else if(!new Background(this.name).check(this.name)) return "rejected";
    else return "approved";
  }
}

const Account = function() {
  this.balance = 100001;
  this.has = function(amount) {
    if(amount*10/100 < this.balance) return true;
    return false;
  }
}

const Credit = function() {
  this.history = function(name) {
    // complex logic
    return true;
  }
}

const Background = function() {
  this.check = function(name) {
    // complex logic
    return true;
  }
}

let status = new Mortgage('Mallory').request(100000);
console.log(status);
