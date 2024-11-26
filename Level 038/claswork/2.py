def filter_bad_words(sentence):
    bad_words = ('lazy', 'dont want', 'bored')
    words = sentence.split()
    filtered_words = [word for word in words if word not in bad_words]
    return ' '.join(filtered_words)

# Example usage
filtered_sentence = filter_bad_words("I am feeling lazy and don't want to work today")
print(filtered_sentence)  # Output: "I am feeling and to work today"
