const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');
const mongoose = require('mongoose');
//const { Socket } = require('dgram');
  const { Socket } = require('dgram');


const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

//Coneccion de Base de datos
mongoose.connect('mongodb+srv://moyorloChat:moyorlo@chat.357bp.mongodb.net/chat?retryWrites=true&w=majority',{
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

require('./sockets')(io);

//Enviando archivos staticos
app.use(express.static(path.join(__dirname, 'public')));

//iniciando el server
server.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
















//const app = require('./app');
//const http = require('http');
//const socketio = require('socket.io');


//require('./sockets')(io);
//require('./database');

//async function main() {
  //await server.listen(app.get('port'));
  //console.log(`server on port ${app.get('port')}`);
//}

//main();