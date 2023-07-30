const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

function extractZip(zipFilePath, destinationFolder) {
  const zip = new AdmZip(zipFilePath);
  zip.extractAllTo(destinationFolder, true);
  console.log(`Zip file '${zipFilePath}' extracted to '${destinationFolder}'.`);
}

const zipFilePath = '../Q5/Html Zip'; // Replace this with the path of your zip file
const destinationFolder = '../Q6/ExtractFolderZip'; // Replace this with the folder where you want to extract the files

extractZip(zipFilePath, destinationFolder);
