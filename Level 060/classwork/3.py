class Dog:
    def __init__(self, name, breed):
        self.name = name    # Instance Variable
        self.breed = breed  # Instance Variable

dog1 = Dog("Buddy", "Golden Retriever")
dog2 = Dog("Max", "Bulldog")

print(dog1.name)  # Output: Buddy
print(dog2.breed)  # Output: Bulldog
