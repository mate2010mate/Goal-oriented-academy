function sumNumbers(a, b) {
    // ვამოწმებთ, რომ ორივე არგუმენტი Number ტიპის იყოს
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be of type Number');
    }
    return a + b;
}

// ფუნქციის გამოძახების მაგალითი
console.log(sumNumbers(5, 10)); // 15
console.log(sumNumbers(3.5, 2.7)); // 6.2
