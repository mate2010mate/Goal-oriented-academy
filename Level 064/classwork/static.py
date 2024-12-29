class MathHelper:
    @staticmethod
    def add_numbers(a, b):
        return a + b
    
    @staticmethod
    def is_positive(number):
        return number > 0

# მაგალითის გამოყენება
print(MathHelper.add_numbers(5, 10))  # 15
print(MathHelper.is_positive(-3))  # False
