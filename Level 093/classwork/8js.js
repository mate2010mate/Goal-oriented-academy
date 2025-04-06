const person = { name: "Alice", age: 25 };
const contact = { phone: "123-456", email: "alice@example.com" };
const combined = { ...person, ...contact };
console.log(combined);

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combinedNumbers = [...nums1, ...nums2];
console.log(combinedNumbers); 

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); 
