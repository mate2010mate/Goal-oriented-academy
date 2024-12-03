# Initial list
list1 = [2, 51, 11, 13, 51, 100]

# 1. Output every item from the list with positive indexing
print("Positive indexing:")
for i in range(len(list1)):
    print(f"Index {i}: {list1[i]}")

# 2. Output every item from the list with negative indexing
print("\nNegative indexing:")
for i in range(-1, -len(list1) - 1, -1):
    print(f"Index {i}: {list1[i]}")

# 3. Replace the last element of a list with a new value
list1[-1] = 200
print("\nList after replacing the last element:", list1)

# 4. Replace the fifth element of a list with a new value
list1[4] = 500
print("\nList after replacing the fifth element:", list1)

# 5. Extract the last three elements of a list
last_three = list1[-3:]
print("\nLast three elements:", last_three)

# 6. Extract the first three elements of a list
first_three = list1[:3]
print("\nFirst three elements:", first_three)

# 7. Extract the middle two elements of a list ([11, 13])
middle_two = list1[2:4]
print("\nMiddle two elements:", middle_two)

# 8. Extract random elements of a list with negative indexes
random_negatives = [list1[-6], list1[-4], list1[-2]]  # Using negative indices to extract random elements
print("\nRandom elements with negative indexes:", random_negatives)
