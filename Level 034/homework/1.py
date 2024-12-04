def get_list_element(lst, index):
    try:
        return lst[index]
    except IndexError:
        return "Index out of range"
    except TypeError:
        return "Input is not a list"

# Example usage:
print(get_list_element([1, 2, 3], 2))  # 3
print(get_list_element([1, 2, 3], 5))  # Index out of range
print(get_list_element("not a list", 2))  # Input is not a list
