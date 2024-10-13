def check_number(number):
    if number > 0:
        return "The number is positive."
    elif number < 0:
        return "The number is negative."
    else:
        return "The number is zero."

# Example usage:
user_input = float(input("Enter a number: "))
print(check_number(user_input))
