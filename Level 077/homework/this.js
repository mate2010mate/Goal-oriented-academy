const car1 = {
    brand: "BMW",
    model: "M3",
    getInfo() {
        return `Car: ${this.brand} ${this.model}`;
    }
};
console.log(car1.getInfo());
const user = {
    name: "babi",
    age: 30,
    greet() {
        return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
    }
};
console.log(user.greet());

const calculator = {
    num1: 10,
    num2: 20,
    add() {
        return this.num1 + this.num2;
    }
};
console.log(calculator.add());
