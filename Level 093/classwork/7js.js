const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4)); 

const displayInfo = (name, ...info) => {
  console.log(`Name: ${name}`);
  console.log(`Other Info: ${info.join(', ')}`);
};
displayInfo("Alice", 25, "Engineer", "USA");

const findMax = (...nums) => Math.max(...nums);
console.log(findMax(1, 3, 5, 7)); 
