const socketMiddleware = (socket, next) => {
    const token = socket.handshake.auth.token;
    console.log("token", token)
    // logica para verificar el token
    next();
};

module.exports = socketMiddleware;