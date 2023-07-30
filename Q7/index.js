const fs = require('fs');
const { promisify } = require('util');

// Promisify fs.unlink function
const unlinkAsync = promisify(fs.unlink);

// Function to delete a file using the promisified unlink function
async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`File '${filePath}' has been deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting file '${filePath}': ${error.message}`);
  }
}

// Example usage: Call the deleteFile function
const filePathToDelete = './deletefile/file1.txt';
deleteFile(filePathToDelete);




