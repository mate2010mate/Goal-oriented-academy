def separate_even_odd(numbers):
    evens = [num for num in numbers if num % 2 == 0]
    odds = [num for num in numbers if num % 2 != 0]
    return evens, odds

# Example usage:
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens, odds = separate_even_odd(numbers)
print("Evens:", evens)
print("Odds:", odds)
