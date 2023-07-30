const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

function extractZip(zipFilePath, destinationFolder) {
  const zip = new AdmZip(zipFilePath);
  zip.extractAllTo(destinationFolder, true);
  console.log(`Zip file '${zipFilePath}' extracted to '${destinationFolder}'.`);
}

const zipFilePath = '../Q5/Create Zip SuccessFully !!!..'; 
const destinationFolder = '../Q6/ExtractFolderZip'; 

extractZip(zipFilePath, destinationFolder);
