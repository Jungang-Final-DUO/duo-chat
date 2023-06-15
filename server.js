const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: "http://localhost:8282",
        methods: ["GET", "POST"],
    }
});

const adminName = 'WOULD U DUO'

//Run when client connect
io.on('connection', socket => {

    //listen for chatMessage
    socket.on('chatMessage', (message) => {
        const {username, room, msg} = message;
        console.log(username, msg, room);
        io.emit('message', formatMessage(username, room, msg));
    })

});


const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
