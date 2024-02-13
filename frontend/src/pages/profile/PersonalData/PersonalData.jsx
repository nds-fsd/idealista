import styles from "./personalData.module.css";

const PersonalData = ({userData}) => {
    return (
        <div className={styles.personalData}>
            {/* <h1>Datos personales</h1> */}
            <p>Nombre: {userData.name}</p>
            <p>Correo electronico: {userData.email}</p>
            <p>Ubicación: {userData.location}</p>
            <p>Calle: {userData?.street || ""}</p>
            <p>Número de Calle: {userData?.streetNumber || ""}</p>
            <p>Código Postal: {userData?.postalCode || ""}</p>
            <p>Provincia: {userData?.province || ""}</p>
            <p>Sobre mí: {userData?.aboutMe || ""}</p>
        </div>
    );
}

export default PersonalData;