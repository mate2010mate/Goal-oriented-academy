class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    drive() {
        return `${this.brand} ${this.model} is driving!`;
    }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("BMW", "M3");

console.log(car1.drive()); // Tesla Model S is driving!
console.log(car2.drive()); // BMW M3 is driving!