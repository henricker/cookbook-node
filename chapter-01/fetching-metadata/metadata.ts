import fs, { PathLike } from 'fs'

const file = process.argv[2];

function printMetadata(file: PathLike) {
  try {
    const fileStats = fs.statSync(file);
    console.log(fileStats);
    /**
     * Stats {
        dev: 2050,
        mode: 33204,
        nlink: 1,
        uid: 1000,
        gid: 1000,
        rdev: 0,
        blksize: 4096,
        ino: 2366645,
        size: 0,
        blocks: 0,
        atimeMs: 1655857027828.7002,
        mtimeMs: 1655856917248.29,
        ctimeMs: 1655856917248.29,
        birthtimeMs: 1655856917248.29,
        atime: 2022-06-22T00:17:07.829Z,
        mtime: 2022-06-22T00:15:17.248Z,
        ctime: 2022-06-22T00:15:17.248Z,
        birthtime: 2022-06-22T00:15:17.248Z
      }
     */
  } catch(err) {
    console.error('Error reading file: ', file)
  }

}

printMetadata(file)