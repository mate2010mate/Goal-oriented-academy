def categorize_age(age):
    if age < 0:
        return "Invalid age."
    elif age <= 12:
        return "You are a child."
    elif age <= 19:
        return "You are a teenager."
    elif age <= 35:
        return "You are an adult."
    elif age <= 60:
        return "You are middle-aged."
    else:
        return "You are a senior."

# Example usage:
user_age = int(input("Enter your age: "))
print(categorize_age(user_age))
