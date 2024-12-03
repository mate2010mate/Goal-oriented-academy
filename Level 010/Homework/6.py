for number in range(2, 21, 2):
    print(number)

text = "Hello, Python!"
for char in text:
    print(char)


for number in range(1, 11):
    print(f"{number} squared is {number**2}")
  

fruits = ["apple", "banana", "cherry", "date"]
for fruit in fruits:
    print(f"I like {fruit}")

text = "Programming"
for char in text:
    if char.lower() in "aeiou":
        print(char)

number = 10
while number > 0:
    print(number)
    number -= 1

number = 1
total_sum = 0

while number <= 20:
    total_sum += number
    print(f"Sum till {number}: {total_sum}")
    number += 1


user_input = ""
while user_input.lower() != "quit":
    user_input = input("Type something (or 'quit' to exit): ")
    print(f"You typed: {user_input}")

number = 5
while number < 100:
    print(number)
    number += 5

import random
winning_number = random.randint(1, 10)
guess = 0

while guess != winning_number:
    guess = int(input("Guess the number (1-10): "))
    if guess < winning_number:
        print("Too low!")
    elif guess > winning_number:
        print("Too high!")
    else:
        print("Congratulations! You guessed it!")
