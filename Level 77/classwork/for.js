const user = { name: "mate", age: 14, city: "mtskheta" };
for (const key in user) {
  console.log(key, user[key]); 
}

const fruits = ["Apple", "Banana", "Cherry"];
for (const index in fruits) {
  console.log(index, fruits[index]); 
}

const car = { brand: "Toyota", model: "Corolla", year: 2020 };
for (const prop in car) {
  console.log(prop, car[prop]); 
}
