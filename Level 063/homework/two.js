class Computer {
    constructor(brand, processor, ram, storage) {
        this.brand = brand;
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
    }

    displaySpecs() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Processor: ${this.processor}`);
        console.log(`RAM: ${this.ram}GB`);
        console.log(`Storage: ${this.storage}GB`);
    }
}

const computer = new Computer('Dell', 'Intel Core i7', 16, 512);
computer.displaySpecs();
