import styles from "./personalData.module.css";

const PersonalData = ({userData}) => {
    return (
        userData && (
            <>
                <p>Nombre: {userData.name}</p>
                <p>Correo electronico: {userData.email}</p>
                <p>Ubicación: {userData.location}</p>
                <p>Calle: {userData?.street || ""}</p>
                <p>Número de Calle: {userData?.streetNumber || ""}</p>
                <p>Código Postal: {userData?.postalCode || ""}</p>
                <p>Provincia: {userData?.province || ""}</p>
                <p>Sobre mí: {userData?.aboutMe || ""}</p>
            </>
        )
    );
};

export default PersonalData;