// Creating a Promise that simulates fetching data
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'Example Data' };
      // Simulate a successful response
      resolve(data);
      // Simulate an error response
      // reject(new Error('Data not available'));
    }, 1000);
  });
  
  // Chaining the Promise with another operation
  fetchData.then(data => {
    console.log('Fetched Data:', data);
    return data.name.toUpperCase();
  })
  .then(uppercasedName => {
    console.log('Uppercased Name:', uppercasedName);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });