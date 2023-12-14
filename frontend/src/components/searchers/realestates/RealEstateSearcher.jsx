import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./RealEstateSearcher.module.css";
import imageSearcher from "../../../assets/buscador-banner.svg"



function RealEstateSearcher() {
    const [location, setLocation] = useState("");
    const [operation, setOperation] = useState("");
    const [realEstateType, setRealEstateType] = useState("");

    useEffect(() => {
        setOperation("Comprar");
        setLocation("");
        setRealEstateType("Viviendas");
    }, [])

    const urlQueryString = () => {
        return "/realestates?operation=" + operation + "&location=" + location + "&realestatetype=" + realEstateType;
    }

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <img src={imageSearcher} alt="Buscador inmuebles" />
                <div className={styles.searchcontainer}>
                    <div className={styles.searchheader}>
                        <div className={(operation === "Comprar") ? styles.tabselected : styles.tabunselected} 
                             onClick={() => setOperation("Comprar")}>Comprar</div>
                        <div className={(operation === "Alquiler") ? styles.tabselected : styles.tabunselected} 
                             onClick={() => setOperation("Alquiler")}>Alquiler</div>
                        <div className={(operation === "Compartir") ? styles.tabselected : styles.tabunselected} 
                             onClick={() => setOperation("Compartir")}>Compartir</div>
                    </div>
                    <div className={styles.searchbody}>
                        <input className={styles.location} type="text" value={location} onChange={() => {setLocation(event.target.value)}} placeholder="Población"></input>
                        <select className={styles.realestatestype} value={realEstateType} onChange={() => {setRealEstateType(event.target.value)}}>
                            <option value="Viviendas">Viviendas</option>
                            <option value="Promoción">Promoción</option>
                            <option value="Oficinas">Oficinas</option>
                            <option value="Local-Nave">Local o nave</option>
                            <option value="Garaje">Plaza de garaje</option>                            
                            <option value="Terreno">Terreno</option>
                            <option value="Trastero">Trastero</option>
                            <option value="Edificio">Edificio</option>
                        </select>
                        <Link to={urlQueryString()}><button className={styles.search}>Buscar</button></Link>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default RealEstateSearcher;