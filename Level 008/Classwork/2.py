num1 = 20
num2 = 15
num3 = 30

# ნაკლები ან ტოლი და მეტი
print((num1 < num2) and (num3 > num2))  
# False - რადგან პირველი პირობა (20 < 15) არის False, მეორე კი True, მაგრამ AND ითხოვს ორივე True იყოს.

# მეტი ან ტოლი და ტოლი
print((num1 > num2) or (num1 == num3))  
# True - რადგან პირველი პირობა (20 > 15) არის True, მიუხედავად იმისა, რომ მეორე პირობა False-ია.

# ნაკლები და ტოლი
print((num2 < num3) and (num1 != num3))  
# True - ორივე პირობა სწორია: 15 < 30 და 20 != 30.
