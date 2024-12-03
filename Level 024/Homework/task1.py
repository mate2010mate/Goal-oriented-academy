def average(numbers):
    # Check if the list is empty to avoid division by zero
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)

# Example usage:
numbers = [1, 2, 3, 4, 5]
print(average(numbers))  # Output: 3.0
