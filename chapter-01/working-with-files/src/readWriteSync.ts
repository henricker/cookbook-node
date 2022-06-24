import fs from 'fs';
import path from 'path';

/**
 * ReadFileSync and WriteFileSync are synchronous methods.
 * They block/delay the execution of the code until the file is read/written
 * To make it asynchronous, we need to use the callback function
 */

console.log(process.cwd(), 'hello.txt')
const filePath = path.join(process.cwd(), 'hello.txt');

const contents = fs.readFileSync(filePath, 'utf8');

console.log('File contents: ', contents);

const upperContents = contents.toUpperCase();

fs.writeFileSync(filePath, upperContents);
console.log('file updated!');