import { useEffect, useState, useContext } from "react";

import styles from "./userProfile.module.css";
import { getUser } from "../../utils/apis/userApi";
import UserContext from "../../context/UserContext";

const UserProfile = () => {
    const [userData, setUserData] = useState(null);

    const {user} = useContext(UserContext)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUser(user._id); 
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className={styles.userProfile}>
        <>
        <h1>{userData?.name}</h1>
        <h2>{userData?.email}</h2>
        </>
        {/* Tab nav */}
        <ul className = "nav nav-tabs">
            <li className = "nav-item">
                <a className = "nav-link active" href = "#">Datos personales</a>
            </li>
            <li className = "nav-item">
                <a className = "nav-link" href = "#">Mis publicaciones</a>
            </li>
            <li className = "nav-item">
                <a className = "nav-link" href = "#">Mis favoritos</a>
            </li>
        </ul>
        {/* Tab content */}
        <div className = "tab-content"> 
            {userData && (
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
            )}
        </div>
        </div>
    );
    }

export default UserProfile;