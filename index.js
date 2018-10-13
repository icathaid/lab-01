'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');


console.log(greet('friend'));  // hello friend
console.log(math.add(4,6)); // 10
console.log(math.subtract(15,3)); // 12
console.log(math.multiply(2,3)); // 6
console.log(math.divide(16/4)); // 4