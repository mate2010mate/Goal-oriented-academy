function calculator(a, b, operator) {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return b !== 0 ? a / b : 'Cannot divide by zero';
    return 'Invalid operator';
  }
  
  module.exports = calculator;
  function calculator(a, b, operator) {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return b !== 0 ? a / b : 'Cannot divide by zero';
    return 'Invalid operator';
  }
  
  function filter(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (func(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  module.exports = { calculator, filter };
  