def manual_endswith(s, mate):
    if len(mate) > len(s):
        return False
    for i in range(1, len(mate)+ 1):
        if s[-i] != mate[-i]:
            return False
        return True
    
print(manual_endswith("hello", "mr"))