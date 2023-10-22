const Logger = require('./single.js').Logger;

let l1 = new Logger();
l1.log('Message 1');
l1.log('Message 2');
console.log(l1.show());
console.log(new Logger().show());
