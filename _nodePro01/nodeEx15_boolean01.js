var util = require('util');

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean('0'));
console.log(Boolean('false'));
console.log(Boolean(false));
console.log(util.isBoolean('false'));