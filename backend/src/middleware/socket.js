const User = require('../mongo/schemas/users');
const jwt = require('../security/jwToken');

const socketMiddleware = async (socket, next) => {
    const token = socket.handshake.headers.authorization;
    const userInfo = await isValid(token)
    if (userInfo) {
        socket.auth = userInfo;
        next();
    } else {
        next(new Error("InvalidToken"));
    }
};

const isValid = async (token) => {
    if (token) {
        const info = jwt.verifyAccessToken(token);
        console.log(info)
        return await User.findById(info?.id);
    }
    return null
}

module.exports = socketMiddleware;