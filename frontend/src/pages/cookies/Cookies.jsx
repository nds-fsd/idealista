import React from "react";
import Cookies from "../../assets/cookies.jpg";
import styles from "./Cookies.module.css";

const CookiePolicy = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.imghead} src={Cookies} alt="Equipo Realista" />
            </div>
            <div className={styles.listrealestates}>
                <div className={styles.texto}>
                    <h2>Política de Cookies</h2>
                    <p>
                        En nuestro sitio web utilizamos <span className={styles.keyword}>cookies</span> para mejorar tu experiencia de usuario y ofrecerte contenido personalizado. A continuación, te explicamos qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas.
                    </p>
                    <p>
                        <span className={styles.keyword}>Cookies:</span> Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estos archivos contienen información sobre tu actividad en el sitio y se utilizan para mejorar la experiencia de navegación.
                    </p>
                    <p>
                        <span className={styles.keyword}>Cómo utilizamos las cookies:</span> Utilizamos cookies para analizar el tráfico del sitio, personalizar el contenido y los anuncios, y mejorar la funcionalidad del sitio. También utilizamos cookies de terceros para ofrecerte funciones de redes sociales y para fines de análisis.
                    </p>
                    <p>
                        <span className={styles.keyword}>Gestión de cookies:</span> Puedes gestionar las cookies en la configuración de tu navegador. Puedes optar por bloquear todas las cookies, aceptar solo ciertas cookies o eliminar las cookies existentes. Ten en cuenta que al desactivar las cookies, es posible que algunas partes del sitio web no funcionen correctamente.
                    </p>
                    <p>
                        Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo con esta política. Si tienes alguna pregunta sobre nuestra política de cookies, no dudes en <span className={styles.contact}>contactarnos</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
