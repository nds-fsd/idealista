
const Chat = require("../mongo/schemas/chatMessage");

const messageEventHandler = async (message, io, userInfo) => {
    try {
        const { to, content } = message;
        console.log("from:", userInfo._id.toString());
        console.log("to:  ", to);
        console.log("content:", content)
        const newMessage = new Chat({
            userSender: userInfo._id.toString(),
            userReceiver: to,
            content: content
        });
        const createdMessage = await newMessage.save()
        if (createdMessage)
            io.to(to).emit('msg', createdMessage)

    } catch (e) {
        console.error(e)
    }
}




module.exports = {
    messageEventHandler
}