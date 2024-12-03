def manual_max(lst):
    # Assume the first element is the maximum
    max_value = lst[0]
    for num in lst:
        if num > max_value:
            max_value = num
    return max_value
