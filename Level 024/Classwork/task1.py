import random

def guess_number():
    target = random.randint(1, 100)
    attempts = 0

    while True:
        guess = int(input("შეიყვანეთ რიცხვი 1-დან 100-მდე: "))
        attempts += 1
        if guess < target:
            print("თქვენი რიცხვი მეტია!")
        elif guess > target:
            print("თქვენი რიცხვი ნაკლებია!")
        else:
            print(f"გილოცავთ! თქვენ გამოიცანით {attempts} მცდელობით.")
            break

guess_number()