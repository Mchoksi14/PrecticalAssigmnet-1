async function fetchData() {
    try {
      const fetch = await import('node-fetch');
      const response = await fetch.default('https://jsonplaceholder.typicode.com/posts');
  
      if (!response.ok) {
        throw new Error(`HTTP status code: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return null;
    }
  }
  
  async function main() {
    const data = await fetchData();
    if (data) {
      console.log('Fetched data:', data);
    }
  }
  
  main();
  