const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app)
const io = socketIO(server);

io.on('connection', socket => {
  console.log('New client connected')
 
  socket.on('next question', (question) => {
    io.sockets.emit('next question', question)
  })
  
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(process.env.PORT || 3001, ()=> {
  console.log(`app is running on port ${process.env.PORT || 3001 }`);
})