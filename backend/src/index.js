const express = require('express');
const { connectDB } = require("./mongo/connection");
const router = require('./routers/index.js');
const cors = require('cors');

const socketMiddleware = require('./middleware/socket.js');
const { messageEventHandler, connectionEventhandler } = require("./controllers/chat.js")

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
    connectionEventhandler(socket);
    const userInfo = socket.auth

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    socket.on('msg', (message, callback) => messageEventHandler(message, io, userInfo, callback))
});

httpServer.listen(8080, () => {
    console.log(`WS Server is up and running on port 8080 ⚡`);
})