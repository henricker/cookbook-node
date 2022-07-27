import fs from 'fs';

const rs = fs.createReadStream('file.txt');

/**
 * A pipe is a form of one-way redirection. In our Terminal (DOS or Unix-like)
 * we often use the pipe operator (|) to pipe the output of one program as the input to another.
 * For exampole, we can enter $ ls | head - 3 to pipe the output of ls to the read -3 command,
 * resulting in the first three lines of the output of ls.
 * 
 * SImilar to how can use the pipe operator in our shells to pipe output between programs,
 * we can use the NodeJs pipe() method to pipe data between streams.
 */
rs.pipe(process.stdout);


/**
 * 
 * By default, when using the pupe() method, stream.end() is called on the destination
 * writble stream when the source readable stream emits and end event. This means that the
 * destination is no longer writable.
 * 
 * To disable this default behaviour, we can supply { end: false } to the pipe() method
 * via an options argument
 * 
 * This configuration instructs the destination stream to remain open even after the end event
 * has been emitted by the source stream
 */
rs.pipe(process.stdout, {
    end: false //default is true
});
