const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined); 



const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = { ...obj1, ...obj2 };

console.log(merged);



const original = [10, 20, 30];
const copy = [...original];

console.log(copy);    
console.log(copy === original); 

