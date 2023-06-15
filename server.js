// const path = require('path'); //static 풀더 만들기 위한 경로 설정
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

app.get('/', function(req, res){
    res.send('<h1>안녕하세요 "/" 경로 확인입니다</h1>');
})

const adminName = 'WOULD U DUO'

//Run when client connect
io.on('connection', socket => {

    //welcome current user
    // socket.emit('message', formatMessage(adminName, 'Welcome to DUO!'));

    //broadcast when a user connects
    // socket.broadcast.emit('message', formatMessage(adminName, 'A user has joined the chat'));

    //runs when client disconnects
    socket.on('disconnect', () => {
        // io.emit('message', formatMessage('user','A user has left the chat'));
    });

    //listen for chatMessage
    socket.on('chatMessage', (message) => {
        const {username, room, msg} = message;
        console.log(username, msg, room);
        io.emit('message', formatMessage(username, room, msg));
    })


});


const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
