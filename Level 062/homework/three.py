# Animal კლასი (საფუძვლები კლასით)
class Animal:
    def __init__(self, name):
        self.name = name

    def move(self):
        print(f"{self.name} is moving.")

# Prey კლასი (Animal-იდან მემკვიდრეობით მიღებული)
class Prey(Animal):
    def flee(self):
        print(f"{self.name} is fleeing.")

# Predator კლასი (Animal-იდან მემკვიდრეობით მიღებული)
class Predator(Animal):
    def hunt(self):
        print(f"{self.name} is hunting.")

# Rabbit კლასი (Prey-იდან მემკვიდრეობით მიღებული)
class Rabbit(Prey):
    def eat_carrots(self):
        print(f"{self.name} is eating carrots.")

# Hawk კლასი (Predator-იდან მემკვიდრეობით მიღებული)
class Hawk(Predator):
    def fly(self):
        print(f"{self.name} is flying.")

# ობიექტების შექმნა და ფუნქციების გამოძახება
rabbit = Rabbit("Rabbit")
rabbit.move()
rabbit.flee()
rabbit.eat_carrots()

hawk = Hawk("Hawk")
hawk.move()
hawk.hunt()
hawk.fly()
