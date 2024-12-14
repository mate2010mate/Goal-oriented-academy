class Car:
    # Class-ის ინიციალიზაცია ოთხი ატრიბუტით
    def __init__(self, make, model, year, color):
        self.make = make
        self.model = model
        self.year = year
        self.color = color

    # მეთოდი მანქანის დეტალების გამოსატანად
    def display_details(self):
        print(f"{self.year} {self.make} {self.model}, Color: {self.color}")

    # მეთოდი, რომელიც ასტარტებს მანქანას
    def start_engine(self):
        print(f"The {self.make} {self.model}'s engine is now running.")

# სამი ობიექტის შექმნა
car1 = Car("Toyota", "Corolla", 2020, "White")
car2 = Car("BMW", "X5", 2022, "Black")
car3 = Car("Tesla", "Model S", 2023, "Red")

# თითოეულ მანქანაზე ატრიბუტების და მეთოდების გაშვება
for car in [car1, car2, car3]:
    car.display_details()
    car.start_engine()
    print()