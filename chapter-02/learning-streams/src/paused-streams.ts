import fs from 'fs';

const rs = fs.createReadStream('file.txt');

// Listening stream pausing and resuming manually
rs.on('readable', () => {

    // Read data from the stream
    let data = rs.read();

    while(data !== null) {
        console.log('Read chunk: ', data);
        data = rs.read();
    }
});

/**
 * 
 * By default the stream is paused. However, stream can be resumed with this conditions:
 * 1. The readable listening 'data' event;
 * 2. When pipe() method is called;
 * 3. When resume() method is called;
 * 
 * 
 * When readable was in flowing mode, the stream will be paused using this conditions:
 * 1. When the pause() method is called;
 * 2. WHen the unpipe() method is called
 */

rs.on('end', () => {
    console.log('No more data');
})