import net from 'net';

const stdin = process.stdin;
const PORT = 3000;
const HOSTNAME = 'localhost';

const socket = net.connect({
  port: PORT,
  host: HOSTNAME
});

socket.on('data', (data) => {
  console.log('Message received by server: ', data.toString('utf-8') + "\n")
});

stdin.on('data', (data) => {
  socket.write(data.toString('utf-8'));
});