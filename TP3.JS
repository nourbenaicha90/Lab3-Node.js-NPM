//Importing Core Modules from Node

const fs = require('fs');

//Writing to a file synchronously
try {
  fs.writeFileSync('notes.txt', 'I live in Algeria');
  console.log('Data has been written to the file.');
} catch (err) {
  console.error(err);
}


const checkTools = require('./utils.JS');
checkTools(); // Ensure checkTools is used as a function


