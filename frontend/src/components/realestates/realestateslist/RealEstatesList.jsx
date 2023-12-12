import React from "react";
import RealEstateListElement from "../realestatelistelement/RealEstateListElement";
import styles from "./RealEstatesList.module.css";

function RealEstateList() {

    return (
        <>
            <div className={styles.card}>
                <RealEstateListElement />
            </div>
            <div className={styles.card}>
                <RealEstateListElement />
            </div>
        </>
    )
}

export default RealEstateList;