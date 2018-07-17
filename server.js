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


// our localhost port
const port = process.env.PORT ||  5000;

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
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