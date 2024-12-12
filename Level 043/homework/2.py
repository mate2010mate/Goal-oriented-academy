def average_of_list(num_list):
    if len(num_list) == 0:
        return 0  # თუ სია ცარიელია, აბრუნებს 0-ს
    total = sum_of_list(num_list)  # იყენებს sum_of_list ფუნქციას
    average = total / len(num_list)
    return average

def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total

# მაგალითი გამოყენება
numbers = [1, 2, 3, 4, 5]
print(average_of_list(numbers))  # შედეგი: 3.0
