import { Link } from "react-router-dom";

import styles from "./AppNav.module.css";
import imageLogo from "../../../assets/logo.svg";
import imageLogin from "../../../assets/usuario.svg";

function AppNav() {

    return (
        <header className={styles.header}> 
            <div className={styles.headernav}>
                <Link to="/" className={styles.logocontent}>
                    <div><img className={styles.logo} src={imageLogo} alt="Logo Realista"/></div>
                    <div>Realista</div>
                </Link>
                <div className={styles.navcontent}>
                    <div><button className={styles.buttonad}>Publica gratis tu anuncio</button></div>
                    <nav className={styles.nav}>
                        <ul className={styles.navlu}>
                            <li className={styles.li}>Mis favoritos</li>
                            <li className={styles.li}>Mis búsquedas</li>
                        </ul>    
                    </nav>
                </div>
                <div className={styles.logincontent}>
                    <img className={styles.user} src={imageLogin} alt="Iniciar sesión"/>
                    <span>Iniciar sesión</span>
                </div>
                
            </div>            
        </header>
    )
}

export default AppNav;
