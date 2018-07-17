const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const messageTypes = [
  'ADD_FAVORITE_GIF',
  'REMOVE_FAVORITE_GIF',
  'SET_FAVORITE_GIF'
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})


const port=process.env.PORT ||  5000;
const app = express()
app.set('port', port );
app.use((err, req, res, next) => {
  logger.error({err})

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

  if (!res.headersSent) {
    res.status(500).send()
  }
})

// our server instance
const server = http.createServer(app)


// This creates our socket using the instance of the server
const io = socketIO(server)

io.on('connection', socket => {
  console.log('New client connected')
 
  socket.on(messageTypes.ADD_FAVORITE_GIF, (data) => {
    io.sockets.emit(messageTypes.ADD_FAVORITE_GIF, data)
  })
  
  socket.on(messageTypes.REMOVE_FAVORITE_GIF, (data) => {
    io.sockets.emit(messageTypes.REMOVE_FAVORITE_GIF, data)
  })
  
  socket.on(messageTypes.SET_FAVORITE_GIF, (data) => {
    io.sockets.emit(messageTypes.SET_FAVORITE_GIF, data)
  })

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))