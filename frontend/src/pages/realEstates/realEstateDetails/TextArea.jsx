import React, { useState } from "react";
import styles from "./RealEstateDetails.module.css"


const TextArea = ({ contactar }) => {
    const [input, setInput] = useState("");

    return (
        <div>
            <label>
                <textarea className={styles.input_area}
                    placeholder='¿Quieres más información o visitar el inmueble? Pregunta al anunciante'
                    onChange={e => setInput(e.target.value)}
                    value={input}></textarea>
            </label>
            <button className={styles.contact_button} onClick={() => {
                contactar(input);
                setInput("");
            }}>Contactar con anunciante</button>
        </div>
    )
}

export default TextArea;