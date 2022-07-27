import { Transform, TransformCallback } from 'stream'

export const stringifyTransformer = new Transform({
    objectMode: true,
    transform: (object: any, encoding: BufferEncoding, callback: TransformCallback): void => {
        try {
            callback(null, Buffer.from(JSON.stringify(object)) + '\n');
        } catch(err: any) {
            callback(err);
        }
    }
});


