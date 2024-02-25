import React from "react";
import Terminos from "../../assets/cookies.jpg";
import styles from "./Terminos.module.css";

const CookiePolicy = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.imghead} src={Terminos} alt="Equipo Realista" />
            </div>
            <div className={styles.listrealestates}>
                <div className={styles.texto}>
                    <h2>Términos y Condiciones</h2>
                    <p>Bienvenido a Realista, una plataforma en línea para comprar y vender casas. Al utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones:</p>
                    <p>
                        <span className={styles.keyword}>Uso del Sitio:</span> Realista es una plataforma que conecta a compradores y vendedores de propiedades inmobiliarias. Te comprometes a utilizar el sitio de manera legal y ética, y a cumplir con todas las leyes y regulaciones aplicables.
                    </p>
                    <p>
                        <span className={styles.keyword}>Registro de Cuenta:</span> Al registrarte en Realista, aceptas proporcionar información precisa y actualizada. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y de todas las actividades que ocurran bajo tu cuenta.
                    </p>
                    <p>
                        <span className={styles.keyword}>Listados de Propiedades:</span> Los listados de propiedades en Realista son proporcionados por vendedores individuales o agentes inmobiliarios. No garantizamos la precisión o veracidad de la información proporcionada en los listados y recomendamos verificar la información de manera independiente.
                    </p>
                    <p>
                        <span className={styles.keyword}>Transacciones:</span> Realista facilita la comunicación entre compradores y vendedores, pero no participa en las transacciones reales. No somos responsables de ningún acuerdo o disputa entre las partes.
                    </p>
                    <p>
                        <span className={styles.keyword}>Responsabilidad:</span> Realista no se hace responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de utilizar nuestros servicios.
                    </p>
                    <p>Estos términos y condiciones están sujetos a cambios en cualquier momento sin previo aviso. Te recomendamos revisar regularmente esta página para estar al tanto de cualquier actualización.</p>
                    <p style={{ marginTop: "25px" }}>
                        El equipo de <span style={{ fontWeight: "800" }}>Realista</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
