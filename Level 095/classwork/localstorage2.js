document.getElementById("listForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    
    const userList = JSON.parse(localStorage.getItem("users")) || [];
    userList.push([name, email, age]);
    
    localStorage.setItem("users", JSON.stringify(userList));
    
    console.log("Updated user list:", userList); 
    alert("Your Info was succesfully saved!");

    event.target.reset(); 
});