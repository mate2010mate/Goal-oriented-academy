
const person = { name: "mate", age: 65, city: "Tbilisi" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

const colors = ["red", "green", "blue"];
for (const index in colors) {
    console.log(colors[index]);
}
const car = { brand: "Toyota", model: "Camry", details: { year: 2022, color: "black" } };
for (const key in car) {
    console.log(`${key}:`, car[key]);
}
