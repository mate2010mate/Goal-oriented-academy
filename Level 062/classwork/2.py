def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Dato", age=30, profession="Developer")
# Output:
# name: Dato
# age: 30
# profession: Developer
