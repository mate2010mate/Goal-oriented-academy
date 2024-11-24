document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    alert("სახელი: " + name + "\nელ. ფოსტა: " + email + "\nპაროლი: " + password);
  });