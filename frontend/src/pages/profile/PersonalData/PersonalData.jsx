import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./PersonalData.module.css";

const PersonalData = ({ userData, handleUpdateUser }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState(userData);
    const { register, handleSubmit, setValue } = useForm();

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleCancel = () => {
        setEditMode(false);
    };

    const handleInputChange = (event) => {
        setEditedData({
            ...editedData,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = (data) => {
        handleUpdateUser(data);
        setEditMode(false);
    };
    

    // Set initial values for the form fields
    useEffect(() => {
        if (userData) {
            setValue("name", userData.name);
            setValue("email", userData.email);
            setValue("location", userData.location);
            setValue("street", userData.street || "");
            setValue("streetNumber", userData.streetNumber || "");
            setValue("postalCode", userData.postalCode || "");
            setValue("province", userData.province || "");
            setValue("aboutMe", userData.aboutMe || "");
        }
    }, [userData, setValue]);

    useEffect(() => {
        if (editedData) {
            setValue("name", editedData.name);
            setValue("email", editedData.email);
            setValue("location", editedData.location);
            setValue("street", editedData.street || "");
            setValue("streetNumber", editedData.streetNumber || "");
            setValue("postalCode", editedData.postalCode || "");
            setValue("province", editedData.province || "");
            setValue("aboutMe", editedData.aboutMe || "");
        }
    }, [editedData, setValue]);

    return (
        userData && (
            <>
                {editMode ? (
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <div className={styles.container}>
                            <div className={styles.input}>
                                <label htmlFor="name" className={styles.label}>Nombre:</label>
                                <input {...register("name")} id="name" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="email" className={styles.label}>Email:</label>
                                <input {...register("email")} id="email" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="location" className={styles.label}>Ubicación:</label>
                                <input {...register("location")} id="location" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="street" className={styles.label}>Calle:</label>
                                <input {...register("street")} id="street" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="streetNumber" className={styles.label}>Número de Calle:</label>
                                <input {...register("streetNumber")} id="streetNumber" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="postalCode" className={styles.label}>Código Postal:</label>
                                <input {...register("postalCode")} id="postalCode" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="province" className={styles.label}>Provincia:</label>
                                <input {...register("province")} id="province" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="aboutMe" className={styles.label}>Sobre mí:</label>
                                <input {...register("aboutMe")} id="aboutMe" className={styles.field} />
                            </div>
                            <div className={styles.buttoncontainer}>
                            <button className={styles.btn} type="submit">Guardar</button>
                            <button className={styles.btn} onClick={handleCancel}>Cancelar</button>
                            </div>
                        </div>
                    </form>
                ) : (
                    <div className={styles.data}>
                        <p>Nombre: {userData.name}</p>
                        <p>Correo electrónico: {userData.email}</p>
                        <p>Ubicación: {userData.location}</p>
                        <p>Calle: {userData?.street || ""}</p>
                        <p>Número de Calle: {userData?.streetNumber || ""}</p>
                        <p>Código Postal: {userData?.postalCode || ""}</p>
                        <p>Provincia: {userData?.province || ""}</p>
                        <p>Sobre mí: {userData?.aboutMe || ""}</p>
                        <button className={styles.btn} onClick={handleEdit}>
                            Editar
                        </button>
                    </div>
                )}
            </>
        )
    );
};

export default PersonalData;