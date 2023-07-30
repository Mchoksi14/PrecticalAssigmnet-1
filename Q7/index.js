const http = require('http');
// const fs = require('fs');
const { promisify } = require('util');
const fs = require('fs').promises;

// Promisify the fs.unlink function
const unlinkAsync = promisify(fs.unlink);

const server = http.createServer(async (req, res) => {
  console.log(`Requested URL: ${req.url}, Method: ${req.method}`);

  if (req.url === '/deletefile' && (req.method === 'POST' || req.method === 'GET')) {
    try {
      const filePath = './deletefile/file.txt'; // Replace this with the path of the file you want to delete
      await unlinkAsync(filePath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('File deleted successfully.');
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error deleting file: ' + err.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
