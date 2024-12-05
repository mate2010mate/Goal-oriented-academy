tuples = [(1, 2), (3, 1), (5, 0)]
sorted_tuples = sorted(tuples, key=lambda x: x[1])
print(sorted_tuples)

numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x ** 2, numbers))
print(squares)

words = ["apple", "bat", "cat", "dog", "elephant"]
filtered_words = list(filter(lambda x: len(x) < 4, words))
print(filtered_words)

