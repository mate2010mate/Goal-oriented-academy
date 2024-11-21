function concatenateStrings(str1, str2) {
    // ვამოწმებთ, რომ ორივე არგუმენტი String ტიპის იყოს
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new Error('Both arguments must be of type String');
    }
    return str1 + str2;
}

// ფუნქციის გამოძახების მაგალითი
console.log(concatenateStrings("Hello, ", "World!")); // "Hello, World!"
console.log(concatenateStrings("Foo", "Bar")); // "FooBar"
