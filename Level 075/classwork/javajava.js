 getElementById('myForm').addEventListener('submit', function(event) {
 event.preventDefault();
          
const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;
 console.log(`name ${name}`);
 console.log(`email: ${email}`);
 console.log(`pass: ${password}`);
 });
