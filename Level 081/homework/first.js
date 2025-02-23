// მანქანის კლასი
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    info() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

// წიგნის კლასი
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    summary() {
        return `'${this.title}' by ${this.author}, ${this.pages} pages.`;
    }
}

// სტუდენტის კლასი
class Student {
    constructor(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }

    introduce() {
        return `My name is ${this.name}, I am ${this.age} years old, and I study ${this.major}.`;
    }
}

// ტესტი
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.info());

const myBook = new Book("1984", "George Orwell", 328);
console.log(myBook.summary());

const student = new Student("Dato", 22, "Computer Science");
console.log(student.introduce());
