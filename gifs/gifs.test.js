import socketIO from 'socket.io';
import socketClient from 'socket.io-client';
import {messageTypes} from '../config';
import {init} from './';
import { Server } from 'http';

// Creates a socket.io client for the given server
const client=(srv)=> {
    var addr = srv.address();
    if (!addr) addr = srv.listen().address();
    var url = 'ws://localhost:' + addr.port;
    return socketClient(url);
}

let server;
let socketServer;

describe('✓ setting the messages to emit to the socket client', ()=>{

    beforeEach(() => {
        server = Server();
        socketServer = socketIO(server);
        init(socketServer);
    })

    afterEach(()=>{
        server.close();
    })

    it('should receive ADD_FAVORITE_GIF message', (done) => {
        const favoriteGif={ gif: {} ,isFavorite:true};
        const message= messageTypes.ADD_FAVORITE_GIF;

        server.listen(function(){
          let socketClient = client(server);

          //Our socket in the server should emit a message of type ADD_FAVORITE_GIF
          socketServer.on('connection', function(s){
            s.on(message, function(data){
              expect(data).toEqual(favoriteGif);
              done();
            });
            
            //Simulating an emit from a client
            socketClient.emit(message, favoriteGif);
            socketClient.emit('disconnect');
          });
        });
    });

    it('should receive REMOVE_FAVORITE_GIF message', (done) => {
        const favoriteGif={ gif: {} ,isFavorite:false};
        const message= messageTypes.REMOVE_FAVORITE_GIF;

        server.listen(function(){
          let socketClient = client(server);

          //Our socket in the server should emit a message of type REMOVE_FAVORITE_GIF
          socketServer.on('connection', function(s){
            s.on(message, function(data){
              expect(data).toEqual(favoriteGif);
              done();
            });
            
            //Simulating an emit from a client
            socketClient.emit(message, favoriteGif);
            socketClient.emit('disconnect');
          });
        });
    });

    it('should receive SET_FAVORITE_GIF message', (done) => {
        const favoriteGif={ gif: {} ,isFavorite:false};
        const message= messageTypes.SET_FAVORITE_GIF;

        server.listen(function(){
          let socketClient = client(server);

          //Our socket in the server should emit a message of type SET_FAVORITE_GIF
          socketServer.on('connection', function(s){
            s.on(message, function(data){
              expect(data).toEqual(favoriteGif);
              done();
            });
            
            //Simulating an emit from a client
            socketClient.emit(message, favoriteGif);
            socketClient.emit('disconnect');
          });
        });
    });

});