// მშობელი კლასი - ცხოველი
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        return "Some generic sound";
    }
}

// შვილობილი კლასი - ძაღლი
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // მშობელი კლასის კონსტრუქტორის გამოძახება
        this.breed = breed;
    }

    makeSound() {
        return "Woof! Woof!";
    }
}

// შვილობილი კლასი - კატა
class Cat extends Animal {
    constructor(name, color) {
        super(name, "Cat");
        this.color = color;
    }

    makeSound() {
        return "Meow!";
    }
}

// შვილობილი კლასი - ფრინველი
class Bird extends Animal {
    constructor(name, canFly) {
        super(name, "Bird");
        this.canFly = canFly;
    }

    makeSound() {
        return "Chirp! Chirp!";
    }
}

// ტესტი
const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.makeSound()); // Woof! Woof!

const cat = new Cat("Whiskers", "Black");
console.log(cat.makeSound()); // Meow!

const bird = new Bird("Tweety", true);
console.log(bird.makeSound()); // Chirp! Chirp!
