import fs from 'fs';
import { Transform } from 'stream';

const rs = fs.createReadStream('file.txt');

const toUpperCase = new Transform({
    transform(chunk: Buffer, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

const ws = fs.createWriteStream('file-upper.txt');

/**
 * Piping toUpperCase transform to each chunk convert to upper case 
 * and put process stdout on pipe to print the result
 */
rs.pipe(toUpperCase).pipe(process.stdout);
rs.pipe(toUpperCase).pipe(ws);