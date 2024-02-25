import React from "react";
import RealistaTeam from "../../assets/equipo_realista.jpg";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.imghead} src={RealistaTeam} alt="Equipo Realista" />
            </div>
            <div className={styles.listrealestates}>
                <div className={styles.texto}>
                    <h2>
                        ¡Bienvenido a <span className={styles.keyword}>Realista</span>!
                    </h2>
                    <p>Somos un equipo joven apasionado por simplificar el proceso de compra y alquiler de viviendas, y estamos aquí para hacer que tu experiencia sea más emocionante, eficiente y personalizada.</p>
                    <p>
                        En <span className={styles.keyword}>Realista</span>, entendemos que buscar una vivienda puede ser abrumador y estresante. Es por eso que nos dedicamos a ofrecerte una plataforma fácil de usar que te conecta con una amplia gama de propiedades adaptadas a tus necesidades y preferencias.
                    </p>
                    <p>Ya sea que estés buscando tu primer apartamento, un lugar acogedor para tu familia o una inversión lucrativa, estamos aquí para ayudarte en cada paso del camino.</p>
                    <p>
                        Nuestro equipo está formado por profesionales apasionados y comprometidos que trabajan incansablemente para garantizar que cada aspecto de tu experiencia con <span className={styles.keyword}>Realista</span> sea excepcional. Desde nuestro equipo de desarrollo técnico hasta nuestro equipo de atención al cliente, cada miembro de <span className={styles.keyword}>Realista</span> comparte la misma visión de proporcionar un servicio excepcional y resultados sobresalientes.
                    </p>
                    <p>
                        En <span className={styles.keyword}>Realista</span>, creemos en la transparencia, la confianza y la honestidad. Nos esforzamos por construir relaciones sólidas y duraderas con nuestros clientes, basadas en la integridad y el respeto mutuo.
                    </p>
                    <p>Tu satisfacción y felicidad son nuestra máxima prioridad, y haremos todo lo posible para superar tus expectativas en cada interacción.</p>
                    <p>
                        Gracias por elegir <span className={styles.keyword}>Realista</span> como tu socio en esta emocionante aventura. Estamos emocionados de ayudarte a encontrar el hogar de tus sueños y esperamos trabajar juntos para convertir tus visiones en realidad.{" "}
                        <p style={{ marginTop: "20px" }}>
                            ¡Bienvenido a la familia <span className={styles.lastPhrase}>Realista</span>!
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
