const resolvePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data retrieved from the server successfully!");
      }, 2000); 
    });
  };
  
  resolvePromise().then((data) => {
    console.log(data); 
  });
  