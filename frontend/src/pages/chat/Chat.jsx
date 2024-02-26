import React from "react";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import Message from "./Message";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Chat.module.css"
import { FaPaperPlane } from "react-icons/fa"
import { getUser } from "../../utils/apis/userApi"


const Chat = () => {
    const [searchParams] = useSearchParams()
    const toUser = searchParams.get("user");
    const { user } = useContext(UserContext);

    const socketContext = useContext(ChatContext);
    const navigate = useNavigate()

    const [messages, setMessages] = useState([]);
    const [textToSend, setTextToSend] = useState('');
    const [contactList, setContactList] = useState([]);



    useEffect(() => {
        if (!toUser || !socketContext)
            navigate("/")
        socketContext?.socket.on('connect', () => {
        });

        socketContext?.socket.on('msg', async (message) => {
            const contacts = await fillContactList(message, user, contactList)
            setContactList(contacts);
            setMessages((messages) => [...messages, message]);
        });

        socketContext?.socket.on('all', async (messages) => {
            let contacts = []
            for (const message of messages) {
                contacts = await fillContactList(message, user, contacts)
            }
            setContactList(contacts)
            setMessages(messages)
        })

        return () => {
            socketContext?.socket.off('all');
            socketContext?.socket.off('msg');
            socketContext?.socket.off('connect');
        };
    }, [user]);

    // this function will create a list from (1) list of contact, message and logged user. By adding the receiever or sender id to the (1) list of contact
    const fillContactList = async (message, loggedUser, contactList) => {
        let userToAdd = null;
        if (message.userReceiver === loggedUser._id) {
            userToAdd = message.userSender;
        }
        else {
            userToAdd = message.userReceiver;
        }
        if (!contactList.find((e) => e.id == userToAdd)) {
            const contactName = await getContactName(userToAdd);
            return [...contactList, { id: userToAdd, name: contactName }];
        }
        else
            return [...contactList];
    }


    const handleClick = async () => {
        if (!toUser || !textToSend) return;
        const response = await socketContext.socket.emitWithAck('msg', { to: toUser, content: textToSend });
        if (response.status === "ok") {
            setMessages((messages) => [...messages, response.message]);
            setTextToSend('')
        }
    }


    const getContactName = async (id) => {
        try {
            const response = await getUser(id);
            if (response.status == 200)
                return response.data.name
            else
                return "(User removed)"
        } catch {
            return "(User removed)"
        }
    }

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatList}>
                <span> Mis Mensajes</span>

                <ul>
                    {contactList.map(e => <button onClick={() => { navigate(`/chat?user=${e.id}`) }} key={e.id}>{e.name} </button>)}
                </ul>
            </div>
            <hr className={styles.separator}></hr>
            <div className={styles.messagesContainer}>
                <ul style={{ flexDirection: "column", gap: "10px", marginBottom: "12px", flexWrap: "nowrap", height: "600px", overflow: "auto" }}>
                    {
                        messages.length > 0 && messages.filter(m => m.userSender == toUser || m.userReceiver == toUser).map(message =>
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