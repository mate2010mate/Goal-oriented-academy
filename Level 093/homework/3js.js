const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(n => n * 2)); // [2, 4, 6, 8, 10]

const names = ['Ana', 'Gio', 'Dato'];
console.log(names.map(name => name.toUpperCase())); // ['ANA', 'GIO', 'DATO']

console.log(numbers.filter(n => n > 3)); // [4, 5]
