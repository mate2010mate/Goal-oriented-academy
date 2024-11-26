def check_discount(age):
    if age >= 18:
        return "No discount available."
    else:
        return "You are eligible for a discount."

print(check_discount(20))  # Output: No discount available.
print(check_discount(16))  # Output: You are eligible for a discount.
