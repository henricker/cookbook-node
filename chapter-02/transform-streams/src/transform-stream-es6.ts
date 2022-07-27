import fs from 'fs';
import { Transform, TransformCallback } from 'stream';

const rs = fs.createReadStream('file.txt');

class UpperCaseTransform extends Transform {
    constructor() {
        super()
    }

    _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback): void {
        this.push(chunk.toString().toUpperCase());
        callback()
    }
}

/**
 * Piping toUpperCase transform to each chunk convert to upper case 
 * and put process stdout on pipe to print the result
 */
 rs.pipe(new UpperCaseTransform()).pipe(process.stdout);