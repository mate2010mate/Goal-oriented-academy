function validateForm() {
    var name = document.getElementById('t1').value;
    var surname = document.getElementById('t2').value;
    var message = document.getElementById('t3').value;

    // Check if all fields are filled
    if (name === "" || surname === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }
    alert("Message Sent! Thank you, " + name + " " + surname);
    return true; // Allow form submission
}