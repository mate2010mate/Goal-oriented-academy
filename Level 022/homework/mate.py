def manual_min(lst):
    # Assume the first element is the minimum
    min_value = lst[0]
    for num in lst:
        if num < min_value:
            min_value = num
    return min_value
