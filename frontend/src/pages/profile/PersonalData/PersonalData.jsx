import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./personalData.module.css";

const PersonalData = ({ userData, updatedUserData }) => {
    const [editMode, setEditMode] = useState(false);
    const { register, handleSubmit, setValue } = useForm();

    const handleEdit = () => {
        setEditMode(true);
    };

    const onSubmit = (data) => {
        console.log(data);	
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
        if (updatedUserData) {
            setValue("name", updatedUserData.name);
            setValue("email", updatedUserData.email);
            setValue("location", updatedUserData.location);
            setValue("street", updatedUserData.street || "");
            setValue("streetNumber", updatedUserData.streetNumber || "");
            setValue("postalCode", updatedUserData.postalCode || "");
            setValue("province", updatedUserData.province || "");
            setValue("aboutMe", updatedUserData.aboutMe || "");
        }
    }, [updatedUserData, setValue]);

    return (
        userData && (
            <>
                {editMode ? (
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <div className={styles.container}>
                            <div className={styles.input}>
                                <label htmlFor="name" className={styles.label}>Name:</label>
                                <input {...register("name")} id="name" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="email" className={styles.label}>Email:</label>
                                <input {...register("email")} id="email" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="location" className={styles.label}>Location:</label>
                                <input {...register("location")} id="location" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="street" className={styles.label}>Street:</label>
                                <input {...register("street")} id="street" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="streetNumber" className={styles.label}>Street Number:</label>
                                <input {...register("streetNumber")} id="streetNumber" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="postalCode" className={styles.label}>Postal Code:</label>
                                <input {...register("postalCode")} id="postalCode" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="province" className={styles.label}>Province:</label>
                                <input {...register("province")} id="province" className={styles.field} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="aboutMe" className={styles.label}>About Me:</label>
                                <input {...register("aboutMe")} id="aboutMe" className={styles.field} />
                            </div>
                            <button className={styles.btn} type="submit">Save</button>
                        </div>
                    </form>
                ) : (
                    <>
                        <p>Nombre: {userData.name}</p>
                        <p>Correo electronico: {userData.email}</p>
                        <p>Ubicación: {userData.location}</p>
                        <p>Calle: {userData?.street || ""}</p>
                        <p>Número de Calle: {userData?.streetNumber || ""}</p>
                        <p>Código Postal: {userData?.postalCode || ""}</p>
                        <p>Provincia: {userData?.province || ""}</p>
                        <p>Sobre mí: {userData?.aboutMe || ""}</p>
                        <button className={styles.btn} onClick={handleEdit}>
                            Edit
                        </button>
                    </>
                )}
            </>
        )
    );
};

export default PersonalData;