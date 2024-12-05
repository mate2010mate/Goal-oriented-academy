words = ["hello", "world", "python"]
capitalized_words = list(map(lambda x: x.upper(), words))
print(capitalized_words)


numbers = [1, 2, 3, 4, 5]
added_five = list(map(lambda x: x + 5, numbers))
print(added_five)


words = ["apple", "banana", "cherry"]
modified_words = list(map(lambda x: "-start-" + x[0], words))
print(modified_words)
