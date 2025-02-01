//Function Hoisting: JavaScript-ში ფუნქციები გამოცხადების დროს "hoisted" ხდება, რაც იმას ნიშნავს, რომ JavaScript ფუნქციის გამოცხადებას გადაყავს
// პროგრამის თავში. ეს საშუალებას იძლევა, რომ ფუნქცია
//გამოიძახო მის გამოცხადებამდე. მაგალითი:

greet();  

function greet() {
  console.log("გამარჯობა, მსოფლიო!");
}
