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
        super(name); // მშობლის კონსტრუქტორის გამოძახება
        this.age = age;
    }

    greet() {
        return `${super.greet()} and I am ${this.age} years old.`; // მშობლის greet() გამოყენება
    }
}

const kid = new Child("Luka", 10);
console.log(kid.greet()); // "Hello, my name is Luka and I am 10 years old."
