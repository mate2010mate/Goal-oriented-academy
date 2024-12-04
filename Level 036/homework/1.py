# ფუნქცია რომელიც არჩეული ელემენტების გადაატარებს  და მხოლოდ დადებითებს აბრუნებს
def is_positive(x):
    return x > 0

numbers = [-2, -1, 0, 1, 2, 3]
result = filter(is_positive, numbers)

# შედეგი: [1, 2, 3]
print(list(result))
