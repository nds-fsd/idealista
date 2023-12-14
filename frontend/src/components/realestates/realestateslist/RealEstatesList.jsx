import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RealEstateListElement from "../realestatelistelement/RealEstateListElement";

import styles from "./RealEstatesList.module.css";


function RealEstateList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const operation = queryParams.get("operation");
    const localization = queryParams.get("location");
    const realEstateType = queryParams.get("realestatetype");

    useEffect(() => {
        console.log("operation, location, realestatetype", operation, localization, realEstateType);
    }, [])

    return (
        <>
            <div>Parámetros:</div>
            <div>Operation: {operation}</div>
            <div>Location: {localization}</div>
            <div>Real Estate Type: {realEstateType}</div>
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