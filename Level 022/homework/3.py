def manual_replace(lst, old, new):
    for i in range(len(lst)):
        if lst[i] == old:
            lst[i] = new
    return lst
