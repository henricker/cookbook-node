import { Transform } from "stream";

export const upperCase = new Transform({
    transform: (chunk: Buffer, encoding: string, callback: Function) => {
        callback(null, chunk.toString().toUpperCase());
    }
});