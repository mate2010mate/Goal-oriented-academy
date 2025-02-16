const fruits = ["apple", "banana", "cherry", "or\nge"];
const [first, second, restFruits] = fruits;
console.log(first, second); 
console.log(restFruits); 

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); 

const car = { brand: "Toyota", model: "supra", year: 2020, color: "red" };
const { brand, model, ...restProps } = car;
console.log(brand, model); 
console.log(restProps); 