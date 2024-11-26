list1 = [1, 2, 3]
list2 = [4, 5]

# Using map to add the square of each element from list2 to list1
result = list(map(lambda x, y: x + y**2, list1, list2))

print(result)  # Output: [1 + 16, 2 + 25] -> [17, 27]
