import fs from 'fs';

const rs = fs.createReadStream('./file.txt');

//Interacting with the stream automatic
rs.on('data', data => {
    console.log("Read chunk: ", data)
});

rs.on('end', () => console.log('No more data.'));

