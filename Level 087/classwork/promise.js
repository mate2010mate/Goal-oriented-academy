const conditionalPromise = (shouldResolve) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve("Success: The condition was met!");
        } else {
          reject("Failure: The condition was not met.");
        }
      }, 2000); 
    });
  };
  
  // Example usage
  conditionalPromise(true)
    .then((data) => console.log(data)) 
    .catch((error) => console.error(error)); 
  