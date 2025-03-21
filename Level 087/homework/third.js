const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 seconds have passed");
    }, 2000);
  });
  promise3.then((message) => console.log(message));