import styles from "./AppNav.module.css";
import imageLogo from "../../../assets/logo.svg";
import imageLogin from "../../../assets/usuario.svg";
import imageBanner from "../../../assets/buscador-banner";

function AppNav() {

    return (
        <header className={styles.header}> 
            <div className={styles.headernav}>
                <div className={styles.logocontent}>
                    <div><img className={styles.logo} src={imageLogo} alt="Logo Realista"/></div>
                    <div>Realista</div>
                </div>
                <div className={styles.navcontent}>
                    <div><button className={styles.buttonad}>Publica gratis tu anuncio</button></div>
                    <nav className={styles.nav}>
                        <lu className={styles.navlu}>
                            <li className={styles.li}>Mis favoritos</li>
                            <li className={styles.li}>Mis búsquedas</li>
                        </lu>    
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
