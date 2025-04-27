def manual_startswith(s, mate):
    if len(mate) > len(s):
        return False
    for i in range(len(mate)):
        if s[i] != mate[i]:
            return False
        return True
    
print(manual_startswith("hello", "mate"))       