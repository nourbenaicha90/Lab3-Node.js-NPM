const fs = require('fs');
const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide a file path as an argument.');
} else {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
    } else {
      console.log(data);
    }
  });
}
