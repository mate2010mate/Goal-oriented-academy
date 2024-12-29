class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
    
    def display_info(self):
        print(f'{self.year} {self.make} {self.model}')
    
    @classmethod
    def create_toyota(cls, model, year):
        return cls("Toyota", model, year)
    
    @staticmethod
    def is_valid_year(year):
        return year > 2000


class ElectricCar(Car):
    def __init__(self, make, model, year, battery_capacity):
        super().__init__(make, model, year)
        self.battery_capacity = battery_capacity
    
    def display_info(self):
        print(f'{self.year} {self.make} {self.model} - Electric Car with {self.battery_capacity}kWh battery')

# Use of classmethod
toyota_car = Car.create_toyota("Corolla", 2024)
toyota_car.display_info()  # Output: 2024 Toyota Corolla

# Use of staticmethod
print(Car.is_valid_year(2024))  # Output: True

# Use of instance method
electric_car = ElectricCar("Tesla", "Model S", 2024, 100)
electric_car.display_info()  # Output: 2024 Tesla Model S - Electric Car with 100kWh battery
