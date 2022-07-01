import { Readable } from 'stream';

function* generator() {
    yield 'kkkkkkkkkkk'
    yield 'boyyy'
}

async function* generate() {
    yield 'Node.JS'
    yield 'is'
    yield 'a'
    yield 'Javascript'
    yield 'Runtime'
}

const readable = Readable.from(generate());

readable.on('data', chunk => {
    console.log(chunk);
});