import random

# რიცხვი 1-დან 10-მდე (მოგებულის რიცხვი)
correct_number = random.randint(1, 10)

while True:
    # მომხმარებლის ვარიანტი
    guess = int(input("Guess the number between 1 and 10: "))
    
    if guess == correct_number:
        print("It's correct!")
        break  # სწორი პასუხის შემდეგ ციკლი დასრულდება
    else:
        print("It's incorrect! Try again.")
