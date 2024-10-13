def count_letters(text):
    # Remove any non-alphabet characters
    cleaned_text = ''.join(filter(str.isalpha, text))
    return len(cleaned_text)

# Example usage:
text = "Hello, World!"
print(count_letters(text))  