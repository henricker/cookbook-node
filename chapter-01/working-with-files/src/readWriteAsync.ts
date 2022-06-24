import fs from 'fs';
import path from 'path';

/**
 * ReadFileSync and WriteFileSync are synchronous methods.
 * They block/delay the execution of the code until the file is read/written
 * To make it asynchronous, we need to use the callback function
 */

function updateFile(filePath: string, contents: string): void {
  fs.writeFile(filePath, contents, 'utf8', (err) => {
    if (err) {
      throw err;
    }
    console.log('file updated!');
  });
}


const filePath = path.join(process.cwd(), 'hello.txt');

fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('File contents: ', data);

  const upperContents = data.toUpperCase();

  //updateFile(filePath, upperContents);
  setInterval(() => updateFile(filePath, upperContents), 10);
});

setInterval(() => process.stdout.write('*****\n'), 1).unref();
