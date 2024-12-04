# 3 მანქანის dictionary
car1 = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "price": "$20,000"
}

car2 = {
    "make": "Honda",
    "model": "Civic",
    "year": 2021,
    "price": "$22,000"
}

car3 = {
    "make": "Ford",
    "model": "Focus",
    "year": 2019,
    "price": "$18,000"
}

# მანქანების შესახებ ინფორმაციის გაშუქება
cars = [car1, car2, car3]

for car in cars:
    print(f"Make: {car['make']}, Model: {car['model']}, Year: {car['year']}, Price: {car['price']}")
    print("This is the perfect car for you!")
    print("-" * 40)
