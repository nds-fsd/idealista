import Avatar from './Avatar';
import styles from './Message.module.css';

const Message = ({ user, text, loggedUser }) => {

    const isMine = user === loggedUser;

    return (
        <li className={`${isMine ? styles.right : styles.left} ${styles.messageContainer}`}>
            <div className={`${styles.message}`}>
                {/* <Avatar user={user} /> */}
                <div>
                    {/* <p className='username'>{user}</p> */}
                    {text}
                </div>
            </div>
        </li>
    )
}

export default Message;