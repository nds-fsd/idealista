import React from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import {useForm} from "react-hook-form";
import toast, {Toaster} from "react-hot-toast"
import { loginUser } from "../../utils/apis/userApi";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import {useContext} from "react";

import styles from "../../pages/login/Login.module.css"
import login_foto from "../../assets/login_foto.jpg"


const LoginForm = () =>{
    const {register, handleSubmit,setError,reset,formState:{errors}}= useForm();
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserContext);

    const login = () => toast.success("Login exitoso");

    const onLogin = async(data)=>{
        try{
            const response = await loginUser(data);
            
            if (response.status === 200) {
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("user",JSON.stringify(response.data.user))
                setUser(response.data.user);

                console.log("token",response.data.token);
                const user= response.data.user.name;
                console.log("nombre",user)

                await Promise.resolve(login());
                setTimeout(() => {
                navigate("/");}, 1000);

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
            toast.error('Error al intentar iniciar sesión');
            
        }
    };

return (
    <div className={styles.container}>
        <Toaster />
        <div className={styles.image_container}>
            <div className={styles.text_login}><span>Login</span></div>
            <img className={styles.img} src={login_foto} alt="login imagen"/>
        </div>

        <div className={styles.form_container}>
            <form onSubmit={handleSubmit(onLogin)}>
                <div className={styles.input}>
                    <label>Email</label>
                    <input {...register("email",{required:"El email es requerido"})} />
                </div>

                <div className={styles.input}>
                    <label>Contraseña</label>
                    <input type="password"{...register("password",{required:"La contraseña es requerida"})} />
                </div>

                <button className={styles.form_button} type="submit"><span>Iniciar sesión</span></button>
                

                <Link to="/register">
                <div className={styles.register}>
                    <button className={styles.register_button}><span>{`¿Nuevo aquí? ¡Regístrate ahora!`}</span></button>
                </div>
                </Link>
                

            </form>
        </div>
    </div>

    
    
);


};




export default LoginForm;