const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet("John")); 
console.log(greet()); 

const createUser = (name = "Anonymous", age = 18) => ({ name, age });
console.log(createUser()); 

const calculateTotal = (price, tax = price * 0.1) => price + tax;
console.log(calculateTotal(100)); 
console.log(calculateTotal(100, 20)); 
