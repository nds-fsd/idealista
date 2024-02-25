import React from "react";
import { Link } from "react-router-dom";

import styles from "./AppFooter.module.css";
import imageLogo from "../../../assets/Realista_logo.svg";
import imageFacebook from "../../../assets/socialLogos/facebook.svg";
import imageInstagram from "../../../assets/socialLogos/instagram.svg";
import imageX from "../../../assets/socialLogos/x.svg";

function AppFooter() {
    return (
        <div className={styles.principal}>
            <div className={styles.container}>
                <div>
                    <Link to="/" className={styles.logocontent}>
                        <div>
                            <img className={styles.logo} src={imageLogo} alt="Logo Realista" />
                        </div>
                    </Link>
                </div>

                <div className={styles.containerfoot}>
                    <div className={styles.list}>
                        <ul>
                            <Link className={styles.li} to="/about">
                                Sobre Nosotros
                            </Link>
                            <Link className={styles.li} to="/realestates/create">
                                Publica tu inmueble
                            </Link>
                            <Link className={styles.li}>Contacta con Realista</Link>
                            <Link className={styles.li} to="/privacity">
                                Política de privacidad
                            </Link>
                            <Link className={styles.li} to="/cookie">
                                Políticas de cookies
                            </Link>
                            <Link className={styles.li} to="/terms">
                                Condiciones generales
                            </Link>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <Link to="/">
                            <img src={imageFacebook} alt="logo facebook" />
                        </Link>
                        <Link to="/">
                            <img src={imageInstagram} alt="logo instagram" />
                        </Link>
                        <Link to="/">
                            <img src={imageX} alt="logo X" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppFooter;
