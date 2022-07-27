import { Transform, TransformCallback } from "stream";


export const nameTransformer = new Transform({
    objectMode: true,
    transform: (chunck, encoding: BufferEncoding, callback: TransformCallback): void => {
        try {
            const nameObjecy = { name: chunck.name + " " + chunck.surname };
            callback(null, nameObjecy);
        } catch(err: any) {
            callback(err);
        }
    }
})