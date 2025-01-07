document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.content button');
    const emailInput = document.querySelector('.content input[type="email"]');

    button.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if (email === '') {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email format.');
            return;
        }

        alert(`Thank you for subscribing with: ${email}`);
        emailInput.value = '';
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});