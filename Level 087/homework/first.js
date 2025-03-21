const promise1 = new Promise((resolve) => {
    resolve("Hello, Promise!");
  });
  promise1.then((message) => console.log(message));