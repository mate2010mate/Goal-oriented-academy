def sum_numbers(lst):
    return sum([int(i) for i in lst if isinstance(i, int) or i.isdigit()])

# Example usage:
print(sum_numbers([10, "10"]))  # 20
print(sum_numbers([5, "3", 2, "7"]))  # 17
print(sum_numbers([1, 2, 3, "4", "five"]))  # 10
