class Motorcycle:
    # Class variable to count the number of motorcycles
    motorcycle_count = 0

    def __init__(self, brand, model, year, engine_capacity):
        self.brand = brand
        self.model = model
        self.year = year
        self.engine_capacity = engine_capacity
        # Update the class variable each time a new instance is created
        Motorcycle.motorcycle_count += 1

    def display_info(self):
        print(f"{self.year} {self.brand} {self.model} - {self.engine_capacity}cc")

# Creating instances of Motorcycle
moto1 = Motorcycle("Honda", "CBR500R", 2022, 471)
moto2 = Motorcycle("Yamaha", "MT-07", 2021, 689)
moto3 = Motorcycle("Kawasaki", "Ninja 650", 2023, 649)

# Displaying information
moto1.display_info()
moto2.display_info()
moto3.display_info()

# Display the total count of motorcycles
print(f"Total motorcycles created: {Motorcycle.motorcycle_count}")
