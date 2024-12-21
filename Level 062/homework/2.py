# Base class Animal
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")

# Intermediate class Prey
class Prey(Animal):
    def run(self):
        print(f"{self.name} runs away")

# Intermediate class Predator
class Predator(Animal):
    def hunt(self):
        print(f"{self.name} hunts")

# Subclass Rabbit, which is a prey
class Rabbit(Prey):
    def __init__(self, name):
        super().__init__(name)

    def speak(self):
        print(f"{self.name} says 'squeak!'")

# Subclass Hawk, which is a predator
class Hawk(Predator):
    def __init__(self, name):
        super().__init__(name)

    def speak(self):
        print(f"{self.name} says 'screech!'")

# Creating instances of Rabbit and Hawk
rabbit = Rabbit("Bunny")
hawk = Hawk("Falcon")

# Calling methods
rabbit.speak()  # Bunny says 'squeak!'
rabbit.run()    # Bunny runs away
hawk.speak()    # Falcon says 'screech!'
hawk.hunt()     # Falcon hunts
