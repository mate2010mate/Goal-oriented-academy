#Level 1 Data Hiding (Single Underscore)
class Person:
    def __init__(self, name, age):
        self._name = name  # Protected attribute
        self._age = age

    def display_info(self):
        print(f"Name: {self._name}, Age: {self._age}")

person = Person("Dato", 30)
person.display_info()  # Name: Dato, Age: 30
print(person._name)    # Accessing directly is not recommended, but it works



#Level 2 Data Hiding (Double Underscore)

class Person:
    def __init__(self, name, age):
        self.__name = name  # Private attribute
        self.__age = age

    def display_info(self):
        print(f"Name: {self.__name}, Age: {self.__age}")

person = Person("Dato", 30)
person.display_info()  # Name: Dato, Age: 30
# print(person.__name)  # Error: 'Person' object has no attribute '__name'
print(person._Person__name)  # Accessing via name mangling: Dato
