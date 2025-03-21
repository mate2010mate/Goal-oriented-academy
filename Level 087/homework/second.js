const promise2 = new Promise((_, reject) => {
    reject("Something went wrong!");
  });
  promise2.catch((error) => console.error(error));