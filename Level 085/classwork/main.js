const { add, subtract } = require('./mathUtils');

console.log(add(10, 5));       // 15
console.log(subtract(10, 5));  // 5

import { sayHello, sayGoodbye } from './greetings.js';

console.log(sayHello());     // Hello, World!
console.log(sayGoodbye());   // Goodbye, everyone!

import add, { subtract } from './mathOperations.js';

console.log(add(7, 3));        // 10
console.log(subtract(7, 3));   // 4
