//Event Bubbling: როდესაც მოვლენას ინიციატორი ელემენტზე იყენებთ, იგი ჯერ ეჯახება ამ ელემენტზე, შემდეგ კი "ბუშტავს" ზემოთ, ოჯახის სხვა ელემენტებს, triggering მათაც.
//  ეს არის ბრტყელი სტანდარტი.

document.getElementById('child').addEventListener('click', () => {
  console.log("გავაკლიკე ბავშვი");
});

document.getElementById('parent').addEventListener('click', () => {
  console.log("გავაკლიკე მშობელი");
});