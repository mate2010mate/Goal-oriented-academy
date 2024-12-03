import random

# რიცხვი 1-დან 6-მდე (მოგებულის რიცხვი)
correct_number = random.randint(1, 6)

# მომხმარებლის შემოწმება
guess = int(input("Guess the number between 1 and 6: "))

# შემოწმება თუ სწორია ან არა
if guess == correct_number:
    print("It's correct!")
else:
    print("It's incorrect!")
