import React from "react";
import { Link } from "react-router-dom";

import styles from "./RealEstateListElement.module.css"
import house_image from "../../../assets/pexels-aaron-cook-19277901 1.png"

function RealEstateListElement({ realEstate }) {

    return (
        <div className={styles.card}>
            <div>
                <Link to={`/realestates/${realEstate._id}`}>
                    <img className={styles.image} src={house_image} alt="Imagen inmueble"/>
                </Link>
            </div>
            <div>
                <Link className={styles.link} to={`/realestates/${realEstate._id}`}>
                    <h2>{realEstate.shortDescription}</h2>
                </Link>
                <div>{realEstate.properties}</div>
                <div>{realEstate.state}</div>
                <div>{realEstate.price}</div>
            </div>            
        </div>
    )
}

export default RealEstateListElement;