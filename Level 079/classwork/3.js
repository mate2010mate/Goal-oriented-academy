const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); 

const user1 = { name: "Alice", age: 30 };
const user2 = { ...user1, age: 35 };
console.log(user2); 

function multiply(a, b, c) {
  return a * b * c;
}
const numbersArray = [2, 3, 4];
console.log(multiply(...numbersArray)); 