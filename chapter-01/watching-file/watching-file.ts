import fs from 'fs';
const path = './file.txt';


// fs.watchFile(path, (current, previous) => {
//   console.log('File updated', current.mtime);
//   console.log('Previous file', previous.mtime);
// });

fs.watch(path, (eventType, filename) => {
  console.log(eventType) // 'rename' | 'change';
  console.log(`${filename} updated!`);
});