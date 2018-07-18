import { messageTypes } from '../config';

//Listeners to the messages for the socket
  const addListenersToSocket = ({io, socket}) => {

      socket.on(messageTypes.ADD_FAVORITE_GIF, (data) => {
        io.sockets.emit(messageTypes.ADD_FAVORITE_GIF, data)
      })
      
      socket.on(messageTypes.REMOVE_FAVORITE_GIF, (data) => {
        io.sockets.emit(messageTypes.REMOVE_FAVORITE_GIF, data)
      })
      
      socket.on(messageTypes.SET_FAVORITE_GIF, (data) => {
        io.sockets.emit(messageTypes.SET_FAVORITE_GIF, data)
      })
    socket.on('disconnect', () => { console.log('user disconnected')})
  }
  
  //Initializing the web socket
  export function   init(io) {
    io.on('connection', (socket) => addListenersToSocket({io, socket}))
  }