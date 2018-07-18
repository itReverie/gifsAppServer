import socketIO from 'socket.io';
import { SocketIO as socketIO, Server } from 'mock-socket';
import {messageTypes} from '../config';
import {init} from './';



let client;
const mockServer = new Server( webSocket.server);
window.io = socketIO;

describe('✓ setting the messages to emit to the socket client', ()=>{

    // beforeEach(() => {
    //     let client = socketIO.connect(socketURL);
    //   });

    it('should emit ADD_FAVORITE_GIF message for the socket client', () => {

        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:true};
        const message= webSocket.messages.ADD_FAVORITE_GIF;

        const io = socketIO(server)
        init(io);

        client.on('connect',function(data){
          client.emit(message,favoriteGif);
        });

    });

});