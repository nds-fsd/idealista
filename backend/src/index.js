const express = require('express');
const { connectDB } = require("./mongo/connection");
const router = require('./routers/index.js');
const cors = require('cors');

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

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    socket.emit("welcome")

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    })
    socket.on("msg", (msg, to) => {
        console.log(socket.id, ":", msg);
        socket.to(to, "msg")
    })
})
httpServer.listen(8080, () => {
    console.log(`WS Server is up and running on port 8080 ⚡`);
})