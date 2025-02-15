const obj2 = { c: 3, d: 4 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);

const original = { name: "Tornike", age: 29 };
const copy = Object.assign({}, original);
console.log(copy);

const defaultSettings = { theme: "light", fontSize: 14 };
const userSettings = { fontSize: 16 };
const finalSettings = Object.assign({}, defaultSettings, userSettings);
console.log(finalSettings);
