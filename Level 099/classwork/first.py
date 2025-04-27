def manual_isalnum(s):
    for char in s:
        if not('a'<= char <= 'z' or 'A' <= char <='Z' or '0'<= char <= '9'):
            return False
        return True
    
print(manual_isalnum("hello1515"))