class Dog:
    species = "Canine"  # Class Variable

    def __init__(self, name):
        self.name = name

dog1 = Dog("Buddy")
dog2 = Dog("Max")

print(dog1.species)  # Output: Canine
print(dog2.species)  # Output: Canine
