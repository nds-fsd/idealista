
const Chat = require("../mongo/schemas/chatMessage");

const messageEventHandler = async (message, io, userInfo, callback) => {
    try {
        const { to, content } = message;
        const newMessage = new Chat({
            userSender: userInfo._id.toString(),
            userReceiver: to,
            content: content
        });
        const createdMessage = await newMessage.save()
        if (createdMessage)
            io.to(to).emit('msg', createdMessage)
        callback({
            status: "ok",
            message: createdMessage
        })

    } catch (e) {
        console.error(e)
        callback({
            status: 'ko'
        })
    }
}

const connectionEventhandler = async (socket) => {
    const userInfo = socket.auth;
    socket.join(userInfo._id.toString());
    console.log('User connected:', socket.id);
    const messages = await Chat.find({ $or: [{ userSender: userInfo._id }, { userReceiver: userInfo._id }] });
    socket.emit("all", messages)
}


module.exports = {
    messageEventHandler,
    connectionEventhandler
}