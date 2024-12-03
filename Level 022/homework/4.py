def manual_find(lst, value):
    for index in range(len(lst)):
        if lst[index] == value:
            return index
    return -1
