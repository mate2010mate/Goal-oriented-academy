function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); 
console.log(sum(4, 5, 6, 7)); 


//--------------------------------------------------

const [first, ...rest] = [10, 20, 30, 40, 50];

console.log(first); 
console.log(rest);  


const person = { name: "John", age: 25, city: "New York" };

const { name, ...details } = person;

console.log(name);    
console.log(details); 
