import { createContext } from "react";
import io from 'socket.io-client';

const socket = io('ws://localhost:8080');

const Context = createContext()

const SocketContext = ({ children }) => {


    return (
        <Context.Provider value={socket}>
            {children}

        </Context.Provider>
    );
}

export default SocketContext;


