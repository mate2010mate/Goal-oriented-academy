from itertools import zip_longest

result = list(map(lambda x, y: x + (y if y is not None else 0)**2, "list1", zip_longest("list2", fillvalue=None)))
print(result)  # Output will now match the length of list1, with 0 squared when list2 runs out.
