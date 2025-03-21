const rejectPromise = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Error: Unable to retrieve data from the server.");
      }, 2000); 
    });
  };
  
  rejectPromise().catch((error) => {
    console.error(error); 
  });
  