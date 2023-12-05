import React from "react";
import RealEstateListElement from "../realestatelistelement/RealEstateListElement";
import styles from "./RealEstatesList.module.css";

function RealEstateList() {

    return (
        <>
            <div className={styles.card}>
                <RealEstateListElement key="6568b79a074d7de557301999"/>
            </div>
            <div className={styles.card}>
                <RealEstateListElement key="6568b79a074d7de557301998"/>
            </div>
        </>
    )
}

export default RealEstateList;