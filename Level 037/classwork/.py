
# Create a list named 'fruits'
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Print the entire list
print("Original list:", fruits)

# Access and print the first and last items in the list
print("First item:", fruits[0])
print("Last item:", fruits[-1])

# Add a new fruit "fig" to the list
fruits.append("fig")
print("List after adding 'fig':", fruits)

# Remove "banana" from the list
fruits.remove("banana")
print("List after removing 'banana':", fruits)

# Change the value of the second item to "blueberry"
fruits[1] = "blueberry"
print("List after changing the second item to 'blueberry':", fruits)

# Print the length of the list
print("Length of the list:", len(fruits))