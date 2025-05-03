const calculator = require('./calculator');

console.log(calculator(5, 3, '+')); // 8
console.log(calculator(10, 2, '/')); // 5
const { calculator, filter } = require('./calculator');

console.log(calculator(6, 2, '*')); // 12

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (num) => num % 2 === 0;
const evenNumbers = filter(numbers, isEven);

console.log(evenNumbers); // [2, 4, 6]
