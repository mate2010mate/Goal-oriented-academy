data_list = [1, "hello", 3.14, True, None, [1, 2], {'key': 'value'}, (1, 2), {1, 2}, bytearray(b'bytes')]

# Change 5 values
data_list[0] = 100
data_list[1] = "world"
data_list[2] = 2.71
data_list[3] = False
data_list[4] = "changed"

print(data_list)