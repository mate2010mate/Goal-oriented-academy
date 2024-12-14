class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def make_sound(self):
        print("Some generic animal sound")

# Child class 1: Dog
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")
        self.breed = breed

    def make_sound(self):
        print(f"{self.name} the dog says: Woof!")

# Child class 2: Cat
class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Cat")
        self.color = color

    def make_sound(self):
        print(f"{self.name} the cat says: Meow!")

# Child class 3: Bird
class Bird(Animal):
    def __init__(self, name, wingspan):
        super().__init__(name, "Bird")
        self.wingspan = wingspan

    def make_sound(self):
        print(f"{self.name} the bird says: Tweet!")

# Creating instances of each child class
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Gray")
bird = Bird("Sky", "15 cm")

# Calling make_sound() method for each instance
dog.make_sound()
cat.make_sound()
bird.make_sound()
