document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent clicked - Bubbling');
  });
  
  document.getElementById('child').addEventListener('click', function() {
    console.log('Child clicked - Bubbling');
  });
  