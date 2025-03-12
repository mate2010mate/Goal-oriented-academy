const calculate = require('./calculator.js');

console.log(calculate(5, 3, '+')); // 8
console.log(calculate(5, 3, '-')); // 2
console.log(calculate(5, 3, '*')); // 15
console.log(calculate(5, 3, '/')); // 1.666...

function filter(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumber = filter(numbers, num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

import { calculate } from './calculator.js';
import { filter } from './filter.js';

console.log(calculate(5, 3, '+')); // 8
console.log(calculate(5, 3, '-')); // 2
console.log(calculate(5, 3, '*')); // 15
console.log(calculate(5, 3, '/')); // 1.666...

const nums = [1, 2, 3, 4, 5, 6];
const evenNums = filter(numbers, num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]