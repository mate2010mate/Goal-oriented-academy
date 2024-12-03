# მომხმარებლის მონაცემების შეყვანა
first_name = input("Enter your first name: ")  # სახელი
last_name = input("Enter your last name: ")  # გვარი
age = int(input("Enter your age: "))  # ასაკი (მთელი რიცხვი)
password = input("Create a secure password: ")  # პაროლი

# ეკრანზე მონაცემების გამოყვანა
print("\n--- User Account Details ---")
print("Name:", first_name)
print("Last Name:", last_name)
print("Age:", age)
print("Password:", "*" * len(password))  # პაროლი დასაიდუმლოების მიზნით დამალულია
