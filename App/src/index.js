
const socketio = require('socket.io');
const { Socket } = require('dgram');
const http = require('http');


require('dotenv').config();

const app = require('./server');
require('./database');


const server = http.createServer(app);
const io = socketio.listen(server);


require('./sockets')(io);

// Server is listening
server.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
 // console.log('Environment:', process.env.NODE_ENV);
});