const promise5 = Promise.resolve(5);

promise5
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((result) => console.log(result)); // Final result will be 40