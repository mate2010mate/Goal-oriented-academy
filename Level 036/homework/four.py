
products = {
    'apple': True,
    'banana': False,
    'orange': True,
    'kiwi': False,
    'grape': True,
    'pineapple': False
}

out_of_stock = dict(filter(lambda item: not item[1], products.items()))

print(out_of_stock)
