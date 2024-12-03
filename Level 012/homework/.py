total_sum = 0

for number in range(1, 1001):  # ციკლი 1-დან 1000-მდე
    if 500 <= number <= 600:  # თუ რიცხვი 500-დან 600-მდეა
        continue  # გამოტოვე ეს რიცხვი
    total_sum += number  # სხვა რიცხვი დაემატოს ჯამში

print(f"The sum of numbers from 1 to 1000, excluding 500 to 600, is: {total_sum}")
