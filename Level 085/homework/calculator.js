function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            throw new Error('Invalid operator');
    }
}
module.exports = calculate;

// calculator.js
export function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            throw new Error('Invalid operator');
    }
}

export function filter(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
import add from ('./mathOperations.js');
import { subtract } from ('./mathOperations.js');

console.log(`Addition of 5 and 3: ${add(5, 3)}`); // Addition of 5 and 3: 8
console.log(`Subtraction of 5 from 3: ${subtract(5, 3)}`); // Subtraction of 5 from 3: -2