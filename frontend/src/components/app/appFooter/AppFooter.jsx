import React from "react";
import { Link } from "react-router-dom";

import styles from "./AppFooter.module.css";
import imageLogo from "../../../assets/logo.svg";
import imageFacebook from "../../../assets/socialLogos/facebook.svg";
import imageInstagram from "../../../assets/socialLogos/instagram.svg";
import imageX from "../../../assets/socialLogos/x.svg";


function AppFooter(){

    return(
        <div className={styles.principal}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">
                    <img className={styles.logo} src={imageLogo} alt="Logo Realista"/>
                    </Link>
                </div>
                <div className={styles.list}>
                    <ul>
                        <Link><li>Sobre Nosotros</li></Link>
                        <Link to="/create-ad"> <li>Publica tu inmueble</li></Link>
                        <Link><li>Buscador de agencias</li></Link>
                        <Link><li>Tasación de inmuebles</li></Link>
                        <Link><li>Buscador de hipotecas</li></Link>
                        <Link> <li>Preguntas frecuentes (FAQs)</li></Link>
                        <Link><li>Contacta con Realista</li></Link>
                        <Link><li>Política de privacidad</li></Link>
                        <Link><li>Políticas de cookies</li></Link>
                        <Link><li>Condiciones generales</li></Link>
                    </ul>
                </div> 
                <div className={styles.social}>
                    <Link><img src={imageFacebook} alt="logo facebook" /></Link>
                    <Link><img src={imageInstagram} alt="logo instagram" /></Link>
                    <Link><img src={imageX} alt="logo X" /></Link>
                </div>
            </div>            
        </div>
    )
}

export default AppFooter;