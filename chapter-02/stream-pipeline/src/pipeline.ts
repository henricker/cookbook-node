import { pipeline } from "stream";
import fs from 'fs';
import { upperCase } from "./uppercase-transformer";

pipeline(
    fs.createReadStream('file.txt'),
    upperCase,
    fs.createWriteStream('file-upper.txt'),
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('File processed');
        }
    }
)