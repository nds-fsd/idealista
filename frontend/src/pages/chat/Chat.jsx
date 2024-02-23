import React from "react";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import Message from "./Message";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Chat.module.css"
import { FaPaperPlane } from "react-icons/fa"

const Chat = () => {
    const [searchParams] = useSearchParams()
    const toUser = searchParams.get("user");
    const socketContext = useContext(ChatContext);
    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    const [messages, setMessages] = useState([]);
    const [textToSend, setTextToSend] = useState('');


    useEffect(() => {
        if (!toUser || !socketContext)
            navigate("/")
        socketContext?.socket.on('connect', () => {
        });

        socketContext?.socket.on('msg', (message) => {
            if (message.userSender == toUser || message.userReceiver == user._id)
                setMessages((messages) => [...messages, message])
        });

        socketContext?.socket.on('all', (messages) => {
            setMessages(messages.filter(m => m.userSender == toUser || m.userReceiver == toUser))
        })

        return () => {
            socketContext?.socket.off('all');
            socketContext?.socket.off('msg');
            socketContext?.socket.off('connect');
        };
    }, []);

    const handleClick = async () => {
        if (!toUser || !textToSend) return;
        const response = await socketContext.socket.emitWithAck('msg', { to: toUser, content: textToSend });
        if (response.status === "ok") {
            setMessages([...messages, response.message]);
            setTextToSend('')
        }
    }

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatList}>
                <span> Mis Mensajes</span>
            </div>
            <hr className={styles.separator}></hr>
            <div className={styles.messagesContainer}>
                <ul style={{ flexDirection: "column", gap: "10px", marginBottom: "12px" }}>
                    {
                        messages.length > 0 && messages.map(message =>
                            <Message user={message.userSender}
                                text={message.content} loggedUser={user._id} key={message._id} />
                        )
                    }
                </ul>
                <div className={styles.chatbox}>
                    <textarea className={styles.message} placeholder="Escribe un mensaje..." value={textToSend} onChange={(e) => setTextToSend(e.target.value)} />
                    <button className={styles.contact_button}
                        onClick={handleClick}><FaPaperPlane size="16px" /></button>
                </div>
            </div>
        </div>
    );
}


export default Chat