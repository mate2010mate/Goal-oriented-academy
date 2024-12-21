class Person:
    def __init__(self, name, age):
        self._name = name  # Protected attribute
        self._age = age

person = Person("Dato", 30)
print(person._name)  # It's conventionally protected, but still accessible
