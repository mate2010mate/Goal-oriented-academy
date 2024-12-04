# პროდუქტების dictionary
inventory = {
    "apples": True,
    "bananas": False,
    "oranges": True,
    "grapes": False,
    "pears": True
}

# filter რომელიც აჩერებს მხოლოდ "False" პროდუქტებს
out_of_stock = filter(lambda item: not item[1], inventory.items())

# გამოსაჩენი პროდუქტების სახელი
print([item[0] for item in out_of_stock])  # ['bananas', 'grapes']
