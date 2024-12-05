numbers = [1, 2, 3, 4, 5]
result = list(map(lambda x: x % 2 == 0, numbers))
print(result)  # Output: [False, True, False, True, False]
