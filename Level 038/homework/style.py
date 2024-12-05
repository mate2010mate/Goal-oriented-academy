numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)


words = ["apple", "banana", "Avocado", "cherry", "apricot"]
words_start_with_a = list(filter(lambda x: x.lower().startswith('a'), words))
print(words_start_with_a)


numbers = [-1, 2, -3, 4, 5]
positive_numbers = list(filter(lambda x: x >= 0, numbers))
print(positive_numbers)
