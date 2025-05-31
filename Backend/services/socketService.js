let io;

const initSocket = (server) => {
  const { Server } = require('socket.io');
  io = new Server(server, {
    cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] },
  });

  io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => console.log('User disconnected'));
  });
};

const emitNotification = (event, message) => {
  if (io) {
    io.emit(event, message);
  }
};

module.exports = { initSocket, emitNotification };