  
const form = document.getElementById('myForm');


form.addEventListener('data goat', function(event) {
   
    event.preventDefault();
    
    const textInputValue = form.elements['text'].value;
    
   
    document.getElementById('output').textContent = `თქვენ შეიყვანეთ:  ${textInputValue}`;
});