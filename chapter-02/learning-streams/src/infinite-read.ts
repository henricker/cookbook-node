import fs from 'fs';

const readStream = fs.createReadStream("/dev/urandom");


let size = 0;
readStream.on('data', data => {
    size += data.length;
    console.log('File size: ', size);
})
