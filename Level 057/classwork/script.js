document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // თავიდან ავიცილოთ ფორმის სტანდარტული გაგზავნა
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const termsAccepted = document.getElementById('terms').checked;
  
    if (!termsAccepted) {
      alert('You must agree to the terms and conditions to register.');
      return;
    }
  
    // დაბეჭდეთ მონაცემები კონსოლში
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Gender:', gender ? gender.value : 'Not selected');
    console.log('Terms accepted:', termsAccepted);
  
    // წარმატებული რეგისტრაციის შეტყობინება
    alert('Registration successful!');
  });
  