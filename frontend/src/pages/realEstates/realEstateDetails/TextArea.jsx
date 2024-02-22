import React from "react";
import styles from "./RealEstateDetails.module.css"
import { useNavigate } from "react-router-dom";


const TextArea = ({ toUserId }) => {
    const navigate = useNavigate();

    return (
        <div style={{ paddingTop: "20px" }}>
            <button
                className={styles.contact_button}
                onClick={() => { navigate(`/chat?user=${toUserId}`) }}
            >
                Contactar con anunciante
            </button>
        </div>
    )
}

export default TextArea;