let isUserLoggedIn = true;
let hasAccess = true;
let canAccess = isUserLoggedIn && hasAccess; 
console.log(canAccess); 

let age = 25;
let isAdult = (age >= 18) && "Adult";
console.log(isAdult); 


let temperature = 20;
let isSunny = true;
let isIdealWeather = (temperature > 15) && isSunny;
console.log(isIdealWeather);