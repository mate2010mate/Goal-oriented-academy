# ფუნქცია რომელიც იღებს ციფრს და მასზე 2-ს მრავალდება
def multiply_by_two(x):
    return x * 2

numbers = [1, 2, 3, 4]
result = map(multiply_by_two, numbers)

# შედეგი: [2, 4, 6, 8]
print(list(result))
