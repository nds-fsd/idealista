import React from "react";
import { useForm } from "react-hook-form"
import { useState } from "react"
import { RegisterUser } from "../../utils/apis/userApi"
import { useNavigate } from "react-router-dom";
import { HttpStatusCode } from "axios";

import styles from "../register/Register.module.css"
import hand from "../../assets/hand.png"



const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        if (isPrivacyChecked) {
            const response = await RegisterUser(data);
            
            if (response.status == HttpStatusCode.Forbidden) {
                alert("Este email ya esta registrado!!!")
            }
            else if (response.status == HttpStatusCode.Created) {
                alert("El registro se ha completado satisfactoriamente")
                navigate("/")
            }
        }
        else {
            alert("Para registrarte debes aceptar las políticas de privacidad.");
        }
    };

    const [isInfoChecked, setInfoChecked] = useState(false);
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <img style={{ overflow: "auto" }} src={hand} />
            </div>

            <div className={styles.form_container}>
                <form style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.input}>
                        <label>
                            Nombre
                        </label>
                        <br />
                        <input type="text" className={styles.input_text} {...register('name',
                            { required: "El nombre es requerido" })} />
                        {errors.name && <div className={styles.error_message}>{errors.name.message}</div>}
                    </div>

                    <div className={styles.input}>
                        <label>
                            Locación
                        </label>
                        <br />
                        <input className={styles.input_text} {...register('location')} />
                    </div>

                    <div className={styles.input}>
                        <label>
                            Email de acceso
                        </label>
                        <br />
                        <input className={styles.input_text}
                            {...register('email',
                                {
                                    required: "El email es requerido",
                                    pattern: { value: /^\S+@\S+$/i, message: "Este email no es válido" }
                                })} />
                        {errors.email && <div className={styles.error_message}>{errors.email.message}</div>}
                    </div>

                    <div className={styles.input}>
                        <label>
                            Contraseña
                        </label>
                        <br />
                        <input className={styles.input_text}
                            {...register('password',
                                {
                                    required: "La contraseña es requerida",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                        message: "La contraseña debe tener al menos: 8 caracteres, una letra mayúscula, una letra minúscula y un número"
                                    }
                                }
                            )}
                            type="password" />

                        {errors.password && <div className={styles.error_message}> {errors.password.message}</div>}
                    </div>

                    <div className={styles.check_container}>
                        <input className={styles.check} type="checkbox"
                            id="privacidad"
                            name="privacidad"
                            checked={isPrivacyChecked}
                            onChange={(e) => setIsPrivacyChecked(e.target.checked)} />
                        <span>Acepto las políticas de privacidad</span>
                    </div>
                    <div className={styles.check_container}>
                        <input className={styles.check} type="checkbox"
                            id="informacion"
                            name="informacion"
                            checked={isInfoChecked}
                            onChange={(e) => setInfoChecked(e.target.checked)} />
                        <span>Quiero recibir información comercial de inmuebles, noticias y ofertas.</span>
                    </div>
                    <div >
                        <button className={styles.form_button}
                            type="submit">Registrarme</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;