class Person:
    # კლასის ცვლადი ადამიანების რაოდენობის დასათვლად
    total_people = 0

    # ინიციალიზაცია სამი ატრიბუტით
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
        Person.total_people += 1

    # მეთოდი დეტალების გამოსატანად
    def display_info(self):
        print(f"Name: {self.name}, Age: {self.age}, Gender: {self.gender}")

    # მეთოდი მისალმების გამოსატანად
    def greet(self):
        print(f"Hello, my name is {self.name}.")

# ობიექტების შექმნა
person1 = Person("Anna", 25, "Female")
person2 = Person("David", 30, "Male")
person3 = Person("Luka", 22, "Male")

# პირველ ორ ობიექტზე ატრიბუტებისა და მეთოდების გაშვება
person1.display_info()
person1.greet()
print()

person2.display_info()
person2.greet()
print()

# ადამიანების საერთო რაოდენობის გამოტანა
print(f"Total people: {Person.total_people}")
