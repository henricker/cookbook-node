import fs from 'fs/promises';

import path from 'path';

/**
 * ReadFileSync and WriteFileSync are synchronous methods.
 * They block/delay the execution of the code until the file is read/written
 * To make it asynchronous, we need to use the callback function
 */

function updateFile(filePath: string, contents: string): void {
  fs.writeFile(filePath, contents, 'utf8').then(() => {
    console.log('file updated!');
  })
  .catch((err) => {
    throw err;
  })
}


const filePath = path.join(process.cwd(), 'hello.txt');

fs.readFile(filePath, { encoding: 'utf-8' }).then((data) => {
  console.log('File contents: ', data);

  const upperContents = data.toUpperCase();

  //updateFile(filePath, upperContents);
  setInterval(() => updateFile(filePath, upperContents), 10);
})
.catch((err) => {
  throw err;
})

setInterval(() => process.stdout.write('*****\n'), 1).unref();
