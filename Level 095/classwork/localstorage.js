document.getElementById("objectForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    
    const person = { name, email, age };
    const key = `person${localStorage.length + 1}`;
    
    localStorage.setItem(key, JSON.stringify(person));
    
    console.log("Saved object:", person); 
    alert("Your Info was succesfully saved!");

    event.target.reset(); 
});