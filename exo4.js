const fs = require('fs');
const textToWrite = process.argv[3];
const fileName = process.argv[2];

if (!textToWrite || !fileName) {
    console.error('Please provide both a file name and text as parameters.');
} else {
    fs.writeFile(fileName, textToWrite, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('The file has been saved!');
            // Display the contents of the file
            fs.readFile(fileName, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading the file:', err);
                } else {
                    console.log(data);
                }
            });
        }
    });
}
