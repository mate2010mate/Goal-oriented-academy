def calculate_average(numbers):
    if len(numbers) == 0:
        return "List is empty."
    return sum(numbers) / len(numbers)

# Example usage:
numbers = [1, 2, 3, 4, 5, 6]
average = calculate_average(numbers)
print("Average:", average)
