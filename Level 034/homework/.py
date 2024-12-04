def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Cannot divide by zero"
    except TypeError:
        return "Both values must be numbers"
        
# Example usage:
print(divide(10, 2))  # 5.0
print(divide(10, 0))  # Cannot divide by zero
print(divide(10, "two"))  # Both values must be numbers
