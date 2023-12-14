import React from "react";
import { Link } from "react-router-dom";
import styles from "./AppFooter.module.css";
import imageLogo from "../../../assets/logo.svg";

function AppFooter(){
    return(
        
        <div className={styles.principal}>
            <div className={styles.container}>
                <div><img className={styles.logo} src={imageLogo} alt="Logo Realista"/></div>
                <div className={styles.list}>
                    <ul>
                        <li>Sobre Nosotros</li>
                        <li>Publica tu inmueble</li>
                        <li>Buscador de agencias</li>
                        <li>Tasación de inmuebles</li>
                        <li>Buscador de hipotecas</li>
                        <li>Preguntas frecuentes (FAQs)</li>
                        <li>Contacta con Realista</li>
                        <li>Política de privacidad</li>
                        <li>Políticas de cookies</li>
                        <li>Condiciones generales</li>
                        
                    </ul>
                </div> 
                       
            </div>            

                

            
        </div>
        
    )
}

export default AppFooter;