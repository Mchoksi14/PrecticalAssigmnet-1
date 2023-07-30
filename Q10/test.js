// test.js
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`Response status code: ${res.statusCode}`);
  res.on('data', (data) => {
    console.log(`Response body: ${data}`);
  });
});

req.on('error', (error) => {
  console.error(`Error occurred: ${error.message}`);
});

req.end();
