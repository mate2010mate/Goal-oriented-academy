def get_password(correct_password):
    while True:
        user_input = input("please enter your password: ")
        if user_input == correct_password:
            print("pasword is corect :)")
            break
        else:
            print("incorect password try again :(")

# გამოსაყენებელი მაგალითი
get_password("my_secret_password")
