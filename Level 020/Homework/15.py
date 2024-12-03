def square_numbers(numbers):
    squared_numbers = []
    for number in numbers:
        squared_numbers.append(number ** 2)
    return squared_numbers

# გამოყენება
numbers = [3, 12, 5, 2, 6]
squared_list = square_numbers(numbers)
print("New list:", squared_list)
