# lista რომლის ელემენტები არიან სიები
lists = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

# ყოველი სიის საშუალო არითმეტიკული
averages = [sum(sublist) / len(sublist) for sublist in lists]

print(averages)  # [20.0, 50.0, 80.0]
