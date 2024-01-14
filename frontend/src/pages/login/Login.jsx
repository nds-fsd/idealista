import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import { loginUser } from "../../utils/apis/userApi";
import styles from "../../pages/login/Login.module.css"

import login_foto from "../../assets/login_foto.jpg"


const LoginForm = () =>{
    const {register, handleSubmit,setError,formState:{errors}}= useForm();

    const onSubmit = async(data)=>{
        try{
            const response = await loginUser(data);
            
            if (response.status === 200) {
                console.log("Login existoso")
            } else {
                setError("apiError",{
                    type:"manual",
                    message:"Email o password incorrectos"
                });
                alert ("Email o password incorrectos")
                reset();
            }
        } catch (error){
            console.error("Error al intentar iniciar sesión",error)
        }
    };

return (
    <div className={styles.container}>
        <div className={styles.image_container}>
            <img className={styles.img} src={login_foto} alt="login imagen"/>
        </div>

        <div className={styles.form_container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input}>
                    <label>Email</label>
                    <input {...register("email",{required:"El email es requerido"})} />
                    {errors.email && <div className={styles.error_message}>{errors.email.message}</div>}
                </div>

                <div className={styles.input}>
                    <label>Contraseña</label>
                    <input type="password"{...register("password",{required:"La contraseña es requerida"})} />
                    {errors.email && <div className={styles.error_message}>{errors.password.message}</div>}
                </div>

                <button className={styles.form_button} type="submit">Iniciar sesión</button>
            </form>
        </div>
    </div>

    
    
);


};




export default LoginForm;