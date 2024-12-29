class User:
    user_count = 0  
    
    def __init__(self, name):
        self.name = name
        User.user_count += 1

    @classmethod
    def get_user_count(cls):
        return f"Total users: {cls.user_count}"
    
    @classmethod
    def create_guest_user(cls):
        return cls("Guest")


print(User.get_user_count())  
guest = User.create_guest_user()
print(guest.name)  
print(User.get_user_count())  
