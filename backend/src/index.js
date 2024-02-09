const express = require('express');
const { connectDB } = require("./mongo/connection");
const router = require('./routers/index.js');
const cors = require('cors');

const socketMiddleware = require('../src/middleware/socket.js');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

connectDB().then(() => console.log("Connected to database!"))

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port} ⚡`);
});

const httpServer = require("http").createServer(app)
const io = require("socket.io")(httpServer, {
    cors: { origins: ["*"] }
})

io.use(socketMiddleware);


io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    socket.broadcast.emit('msg', { user: socket.id, text: 'Ha entrado en el chat!' });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        socket.broadcast.emit('msg', { user: socket.id, text: 'Ha salido del chat.' });
    });

    socket.on('msg', (message) => {
        console.log('Message received:', message);
        io.emit('msg', message);
    })
});

httpServer.listen(8080, () => {
    console.log(`WS Server is up and running on port 8080 ⚡`);
})