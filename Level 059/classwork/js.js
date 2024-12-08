document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Pre-check: reset the error styling
    const fields = ['name', 'email', 'password', 'gender', 'country', 'terms'];
    fields.forEach(field => {
        document.getElementById(field).classList.remove('error');
    });

    let isValid = true;

    // Validate all fields
    if (document.getElementById('name').value === '') {
        document.getElementById('name').classList.add('error');
        isValid = false;
    }

    if (document.getElementById('email').value === '') {
        document.getElementById('email').classList.add('error');
        isValid = false;
    }

    if (document.getElementById('password').value === '') {
        document.getElementById('password').classList.add('error');
        isValid = false;
    }

    if (document.getElementById('gender').value === '') {
        document.getElementById('gender').classList.add('error');
        isValid = false;
    }

    if (document.getElementById('country').value === '') {
        document.getElementById('country').classList.add('error');
        isValid = false;
    }

    if (!document.getElementById('terms').checked) {
        document.getElementById('terms').classList.add('error');
        isValid = false;
    }

    // If invalid, prevent form submission
    if (!isValid) {
        event.preventDefault();
        alert('გთხოვთ შეავსოთ ყველა ველი და ეთანხმოთ Terms & Conditions!');
    }
});