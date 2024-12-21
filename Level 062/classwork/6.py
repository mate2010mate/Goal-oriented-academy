class Person:
    def __init__(self, name, age):
        self.__name = name  # Private attribute
        self.__age = age

person = Person("Dato", 30)
# print(person.__name)  # This would cause an error, as __name is name-mangled
print(person._Person__name)  # Accessing via name-mangling
