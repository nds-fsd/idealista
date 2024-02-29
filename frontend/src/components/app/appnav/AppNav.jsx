import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import DropDownNav from "../dropDownNav/dropDownNav";
import styles from "./AppNav.module.css";
import imageLogo from "../../../assets/Realista_logo.svg";
import logOutimg from "../../../assets/iconsSVG/logout-svgrepo-com.svg";
import menuVertical from "../../../assets/iconsSVG/menu-vertical-svgrepo-com.svg";
import userProfile from "../../../assets/iconsSVG/user-2-svgrepo-com.svg";
import settings from "../../../assets/iconsSVG/options-svgrepo-com.svg";
import imageAnuncios from "../../../assets/iconsSVG/text-files-svgrepo-com.svg";
import imageChat from "../../../assets/iconsSVG/chat-svgrepo-com.svg";
import imageLogin from "../../../assets/iconsSVG/house-chimney-user-svgrepo-com.svg";
import imageFavoritos from "../../../assets/iconsSVG/heart-svgrepo-com.svg";
import imageSession from "../../../assets/iconsSVG/house-chimney-blank-svgrepo-com.svg";
import UserContext from "../../../context/UserContext";

const AppNav = () => {
    const { user, logOut } = useContext(UserContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    if (user) {
        return (
            <header className={styles.header}>
                <div className={styles.headernav}>
                    <Link to="/" className={styles.logocontent}>
                        <div>
                            <img className={styles.logo} src={imageLogo} alt="Logo Realista" />
                        </div>
                    </Link>
                    <Link to="/realestates/create" className={styles.navcontent}>
                        <button className={styles.buttonad}>Publica gratis tu anuncio</button>
                    </Link>
                    <div className={styles.navcontent}>
                        <nav className={styles.nav}>
                            <ul className={styles.navlu}>
                                <div className={styles.navli}>
                                    <img className={styles.user} src={imageFavoritos} alt="Me gusta" />
                                    <Link to="/favorite" style={{ textDecoration: "none" }}>
                                        <li className={styles.li}>Mis favoritos</li>
                                    </Link>
                                </div>
                                <div className={styles.navli}>
                                    <img className={styles.user} src={imageAnuncios} alt="Mis anuncios" />
                                    <Link to="/anuncios" style={{ textDecoration: "none" }}>
                                        <li className={styles.li}>Mis anuncios</li>
                                    </Link>
                                </div>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.userlog}>
                        <div className={styles.logincontent}>
                            <img className={styles.user} src={imageLogin} alt="Usuario Logeado" />
                            <span style={{ width: "168px" }}>
                                ¡Hola! <br /> <span className={styles.nameuser}>{user.name}</span>
                            </span>
                        </div>
                        <div className={styles.menuvertical}>
                            <img
                                onClick={() => {
                                    setOpen(!open);
                                }}
                                className={styles.userimg}
                                src={menuVertical}
                            />
                        </div>

                        <div className={`${styles.dropdown} ${styles[!open ? "inactive" : "active"]}`}>
                            <ul>
                                <Link to="/profile" className={styles.profilelink}>
                                    <DropDownNav img={userProfile} text={"Mi perfil"} />
                                </Link>

                                <Link to={`/chat?user=${user._id}`}>
                                    <DropDownNav img={imageChat} text={"Mis chats"} />
                                </Link>

                                <DropDownNav onClick={logOut} img={logOutimg} text={"Cerrar sesión"} />
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className={styles.header}>
                <div className={styles.headernav}>
                    <Link to="/" className={styles.logocontent}>
                        <div>
                            <img className={styles.logo} src={imageLogo} alt="Logo Realista" />
                        </div>
                    </Link>
                    <div className={styles.navcontent}>
                        <nav className={styles.nav}>
                            <ul className={styles.lunav}>
                                <div className={styles.linav}></div>
                                <div className={styles.linav}></div>
                            </ul>
                        </nav>
                    </div>
                    <Link className={styles.loginsession} to="/login">
                        <div className={styles.iniciasession}>
                            <img className={styles.user} src={imageSession} alt="Iniciar sesión" />
                            <span>Iniciar sesión</span>
                        </div>
                    </Link>
                </div>
            </header>
        );
    }
};
export default AppNav;
