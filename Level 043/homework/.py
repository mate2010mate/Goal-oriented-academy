def count_items(item_list, item):
    count = 0
    for i in item_list:
        if i == item:
            count += 1
    return count

# მაგალითი გამოყენება
items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
item_to_count = 'apple'
print(count_items(items, item_to_count))  # შედეგი: 3