import ChatContext from "./ChatContext";
import { io } from "socket.io-client";
import { useContext } from "react";
import UserContext from "./UserContext";

const ChatContextProvider = ({ children }) => {
    const { token } = useContext(UserContext)
    if (token) {
        const socket = io(process.env.WEB_SOCKET_BASE_URL, { extraHeaders: { authorization: token } });

        return (
            <ChatContext.Provider value={{ socket }}>
                {children}
            </ChatContext.Provider>
        );
    }
    else {
        return <ChatContext.Provider value={null}>
            {children}
        </ChatContext.Provider>
    }
}

export default ChatContextProvider;
