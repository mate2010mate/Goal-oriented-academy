def manual_round(number):
    integer_part = int(number)
    decimal_part = number - integer_part
    if decimal_part >= 0.5:
        return integer_part + 1
    else:
        return integer_part
    
print(manual_round(4.6))