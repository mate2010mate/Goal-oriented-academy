def main():
    # რაოდენობის შეყვანა
    while True:
        try:
            quantity = int(input("გთხოვთ, შეიყვანოთ ნივთების რაოდენობა, რომლის შეძენაც გსურთ: "))
            if quantity > 0:
                break
            else:
                print("რაოდენობა უნდა იყოს დადებითი რიცხვი.")
        except ValueError:
            print("არასწორი მონაცემი. გთხოვთ, შეიყვანოთ დადებითი მთელი რიცხვი.")

    totalcost = 0
    itemsentered = 0

    # ფასების შეყვანა
    while itemsentered < quantity:
        try:
            price = float(input(f"შეიყვანეთ ფასი ნივთისთვის #{itemsentered + 1}: "))
            if price > 0:
                total_cost += price
                items_entered += 1
            else:
                print("ფასი უნდა იყოს დადებითი რიცხვი.")
        except ValueError:
            print("არასწორი მონაცემი. გთხოვთ, შეიყვანოთ დადებითი რიცხვი.")

    # შედეგის გამოტანა
    print(f"ნივთების მთლიანი ღირებულება: {total_cost} ლარი")

if __name__ == "__main":
    main()
