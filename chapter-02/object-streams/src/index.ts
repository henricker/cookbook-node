import { nameTransformer } from "./name-transformer";
import { stringifyTransformer } from "./stringify-transformer";
import fs from 'fs';

const ws = fs.createWriteStream('file.txt');

nameTransformer.pipe(stringifyTransformer).pipe(ws);

nameTransformer.write({ name: "John", surname: "Doe" });
nameTransformer.write({ name: "Henrique", surname: "Vieira" });
