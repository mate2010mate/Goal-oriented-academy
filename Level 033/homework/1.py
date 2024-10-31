def calc_operation(n1, n2, action):
    if action == 'plus':
        return n1 + n2
    elif action == 'minus':
        return n1 - n2
    elif action == 'times':
        return n1 * n2
    elif action == 'divide':
        return 'Error: Cannot divide by zero' if n2 == 0 else n1 / n2
    else:
        return 'Unknown operation'

# Example function calls with printed results
print(calc_operation(12, 4, 'plus'))       # 16
print(calc_operation(12, 4, 'minus'))      # 8
print(calc_operation(12, 4, 'times'))      # 48
print(calc_operation(12, 4, 'divide'))     # 3.0
print(calc_operation(12, 0, 'divide'))     # Error: Cannot divide by zero