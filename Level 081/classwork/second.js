class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
  
    getName() {
      return this._name;
    }
  
    getAge() {
      return this._age;
    }
  }
  
  const person1 = new Person("John Doe", 30);
  
  console.log(person1.getName());
  console.log(person1.getAge());