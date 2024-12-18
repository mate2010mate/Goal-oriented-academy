function registerUser() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById('terms');

    let valid = true;

    // ყველა ველის ბორდერის გაწმენდა
    name.style.border = '';
    email.style.border = '';
    password.style.border = '';
    terms.style.border = '';

    // ველების შემოწმება და წითელი ბორდერის დაყენება შეცდომის შემთხვევაში
    if (!name.value.trim()) {
      name.style.border = '2px solid red';
      valid = false;
    }

    if (!email.value.trim()) {
      email.style.border = '2px solid red';
      valid = false;
    }

    if (!password.value.trim()) {
      password.style.border = '2px solid red';
      valid = false;
    }

    if (!gender) {
      alert('გთხოვთ აირჩიოთ გენდერი.');
      valid = false;
    }

    if (!terms.checked) {
      alert('რეგისტრაციისთვის აუცილებელია დაეთანხმოთ საიტის წესებს.');
      terms.style.outline = '2px solid red'; // checkbox-ს outline ვაძლევთ
      valid = false;
    }

    if (!valid) {
      return;
    }

    // მონაცემების კონსოლში დაბეჭდვა
    console.log('სახელი:', name.value);
    console.log('Email:', email.value);
    console.log('პაროლი:', password.value);
    console.log('გენდერი:', gender.value);

    alert('რეგისტრაციამ წარმატებით ჩაიარა');

    // ფორმის გასუფთავება
    document.getElementById('registrationForm').reset();
  }