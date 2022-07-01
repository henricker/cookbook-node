import fs from 'fs';

const file = fs.createWriteStream('./file.txt');

for(let i = 0; i <= 1000000; i++) {
    console.log
    file.write(
        "Node.js is a javascript runtime build on google chrome's V8 Javascript engine.\n"
    );
}