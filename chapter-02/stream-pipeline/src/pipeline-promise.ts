import { pipeline } from "stream";
import fs from 'fs';
import { upperCase } from "./uppercase-transformer";
import { promisify } from "util";

const pipelinePromise = promisify(pipeline);

pipelinePromise(
    fs.createReadStream('file.txt'),
    upperCase,
    fs.createWriteStream('file-upper.txt'),
).catch(err => {
    console.error(err);
}).then(() => console.log('File processed'));