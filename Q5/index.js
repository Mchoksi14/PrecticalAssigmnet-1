const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function createZip(folderPath, zipFilename) {
  const output = fs.createWriteStream(zipFilename);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Maximum compression level
  });

  output.on('close', () => {
    console.log(`Zip file '${zipFilename}' created successfully.`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);

  // Compress each file and subdirectory in the folder
  archive.directory(folderPath, false);

  archive.finalize();
}

const folderToCompress = '../Q1'; // Replace this with the actual folder path
const zipFileName = 'Create Zip SuccessFully !!!..'; // Replace this with the desired zip file name

createZip(folderToCompress, zipFileName);
