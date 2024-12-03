# მომხმარებლის მონაცემების შეყვანა
first_name = input("Enter your first name: ")  # სახელი
last_name = input("Enter your last name: ")  # გვარი
age = int(input("Enter your age: "))  # ასაკი
password = input("Create a secure password: ")  # პაროლი

# მონაცემების f-string-ის საშუალებით გამოყვანა
print(f"\n--- User Account Details ---\n"
      f"Name: {first_name}\n"
      f"Last Name: {last_name}\n"
      f"Age: {age}\n"
      f"Password: {'*' * len(password)}")  # პაროლის დამალვა
