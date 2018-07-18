import express from 'express';
import { createServer } from 'http';
import socketIO from 'socket.io';
import { port } from './config';
import { init } from './gifs';

const app = express()
app.set('port', port );

app.use((err, req, res, next) => {
  //Note: If I have time add a logger rather than using console.logs in the server side 
  console.log({err})

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

  if (!res.headersSent) {
    res.status(500).send()
  }
})

// Server instance
const server = createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)
init(io);

server.listen(port, () => console.log(`Listening on port ${port}`))