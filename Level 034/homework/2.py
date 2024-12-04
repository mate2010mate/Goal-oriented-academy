def convert_to_integer(value):
    try:
        return int(value)
    except ValueError:
        return "Cannot convert to integer"
    except TypeError:
        return "Invalid type"

# Example usage:
print(convert_to_integer("123"))  # 123
print(convert_to_integer("abc"))  # Cannot convert to integer
print(convert_to_integer([1, 2, 3]))  # Invalid type
