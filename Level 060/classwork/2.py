class Example:
    def __init__(self, value):
        self.value = value

    def __str__(self):
        return f"Example with value: {self.value}"

obj = Example(10)
print(obj)  # Output: Example with value: 10