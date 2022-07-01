import net from 'net'; // Intern module to using tcp protocol

const HOSTNAME = 'localhost';
const PORT = 3000;


net.createServer((socket) => {
  console.log('Client connected!');

  socket.on('data', (data) => {
    console.log(data.toString('utf-8'));
    socket.write('O server recebeu sua mensagem seu caba safado!');
  });
}).listen(PORT, HOSTNAME);


