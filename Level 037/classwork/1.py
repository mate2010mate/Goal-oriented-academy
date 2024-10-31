
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]


numbers.append(100)
print("List after appending 100:", numbers)


numbers.insert(0, 5)
print("List after inserting 5 at the beginning:", numbers)


numbers.remove(30)
print("List after removing 30:", numbers)


numbers.sort()
print("List after sorting in ascending order:", numbers)


numbers.reverse()
print("List after reversing the order:", numbers)


index_of_50 = numbers.index(50)
print("Index of 50:", index_of_50)

count_of_20 = numbers.count(20)
print("Count of 20:", count_of_20)