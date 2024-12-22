function Computer(brand, processor, ram) {
    this.brand = brand;
    this.processor = processor;
    this.ram = ram;

    this.describe = function () {
        return `${this.brand} კომპიუტერი, ${this.processor} პროცესორით და ${this.ram} RAM-ით.`;
    };
}
const myComputer = new Computer("Apple", "M2", "16GB");
console.log(myComputer.describe());


function Keyboard(type, backlight, layout) {
    this.type = type;
    this.backlight = backlight;
    this.layout = layout;

    this.info = function () {
        return `${this.type} ტიპის კლავიატურა (${this.layout} განლაგება), ${this.backlight ? "ბექლაითით" : "ბექლაითის გარეშე"}.`;
    };
}
const myKeyboard = new Keyboard("მექანიკური", true, "QWERTY");
console.log(myKeyboard.info());


function Bus(brand, capacity, route) {
    this.brand = brand;
    this.capacity = capacity;
    this.route = route;

    this.details = function () {
        return `${this.brand} ბრენდის ავტობუსი ${this.capacity} მგზავრის ტევადობით, ${this.route} მარშრუტზე.`;
    };
}
const myBus = new Bus("Mercedes-Benz", 50, "თბილისი-ბათუმი");
console.log(myBus.details());
