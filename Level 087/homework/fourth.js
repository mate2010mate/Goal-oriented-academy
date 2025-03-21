const promise4 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  });
  
  promise4
    .then((message) => console.log(message))
    .catch((error) => console.error(error));