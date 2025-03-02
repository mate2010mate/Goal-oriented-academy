class Parent {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); 
        this.age = age;
    }

    greet() {
        return `${super.greet()} and I am ${this.age} years old.`; 
    }
}

const kid = new Child("Luka", 10);
console.log(kid.greet());v
 