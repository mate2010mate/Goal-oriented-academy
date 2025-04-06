const fetchData = () => new Promise(resolve => {
    setTimeout(() => resolve('Data loaded'), 1000);
  });
  
  fetchData().then(data => console.log(data)); // Data loaded
  
  async function load() {
    const result = await fetchData();
    console.log(result); // Data loaded
  }
  
  load();
  
  async function delayedMessage() {
    const message = await new Promise(res => setTimeout(() => res('Done!'), 500));
    console.log(message); // Done!
  }
  
  delayedMessage();
  