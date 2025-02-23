class Car {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    startEngine() {
     `The engine of the ${this.year} ${this.make} ${this.model} `;
    }
  
    stopEngine() {
     `The engine of the ${this.year} ${this.make} ${this.model}.`;
    }
  }
  
  const car1 = new Car("Toyota", "Camry", 2020, "White");
  const car2 = new Car("Honda", "Civic", 2019, "Black");
  const car3 = new Car("Ford", "Mustang", 2021, "Red");
  
  console.log(car1.make, car1.model, car1.year, car1.color);
  console.log(car1.startEngine());
  console.log(car1.stopEngine());
  
  console.log(car2.make, car2.model, car2.year, car2.color);
  console.log(car2.startEngine());
  console.log(car2.stopEngine());
  
  console.log(car3.make, car3.model, car3.year, car3.color);
  console.log(car3.startEngine());
  console.log(car3.stopEngine());
  