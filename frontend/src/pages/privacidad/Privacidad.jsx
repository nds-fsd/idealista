import React from "react";
import Privacity from "../../assets/privacidad.jpg";
import styles from "./Privacidad.module.css";

const Privacidad = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.imghead} src={Privacity} alt="Equipo Realista" />
            </div>
            <div className={styles.listrealestates}>
                <div className={styles.texto}>
                    <h2>Política de Privacidad</h2>
                    <p>Nos tomamos muy en serio tu privacidad. En esta política de privacidad, te explicamos cómo recopilamos, utilizamos y protegemos tu información personal.</p>
                    <p>
                        <span className={styles.keyword}>Información personal:</span> Recolectamos información personal que nos proporcionas voluntariamente al utilizar nuestros servicios, como tu nombre, dirección de correo electrónico y número de teléfono. Utilizamos esta información para proporcionarte nuestros servicios y comunicarnos contigo.
                    </p>
                    <p>
                        <span className={styles.keyword}>Uso de la información:</span> Utilizamos tu información personal para personalizar tu experiencia, mejorar nuestros servicios y proporcionarte contenido relevante. No compartimos tu información con terceros sin tu consentimiento, excepto cuando sea necesario para proporcionarte nuestros servicios.
                    </p>
                    <p>
                        <span className={styles.keyword}>Seguridad de la información:</span> Tomamos medidas para proteger tu información personal contra el acceso no autorizado, el uso indebido y la divulgación. Utilizamos medidas de seguridad físicas, técnicas y administrativas para proteger tus datos.
                    </p>
                    <p>
                        <span className={styles.keyword}>Derechos de privacidad:</span> Tienes derecho a acceder, corregir y eliminar tu información personal. Si deseas ejercer tus derechos de privacidad o tienes alguna pregunta sobre nuestra política de privacidad, no dudes en <span className={styles.contact}>contactarnos</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Privacidad;
