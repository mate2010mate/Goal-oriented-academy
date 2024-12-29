let counter = 1;
let interval = setInterval(() => {
  console.log(counter);
  counter++;
  if (counter > 30) {
    clearInterval(interval);
  }
}, 1000);
