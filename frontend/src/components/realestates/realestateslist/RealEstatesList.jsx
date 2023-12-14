import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import styles from "./RealEstatesList.module.css";
import RealEstateListElement from "../realEstateListElement/RealEstateListElement";
import realEstateApi from "../../../utils/realEstateApi";


function RealEstateList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const operation = queryParams.get("operation");
    const localization = queryParams.get("location");
    const realEstateType = queryParams.get("realestatetype");

    const { data, isLoading } = useQuery("realEstateList", () => realEstateApi.ListRealState({ operation, location: localization, realestatetype: realEstateType }))

    useEffect(() => {
        console.log("operation, location, realestatetype", operation, localization, realEstateType);
    }, [])

    if (isLoading) return <div> Loading... </div>

    if (!data) return <div> Something went wrong </div>

    return (
        <>
            <div>Parámetros:</div>
            <div>Operation: {operation}</div>
            <div>Location: {localization}</div>
            <div>Real Estate Type: {realEstateType}</div>
            {data.map(e => <div key={e._id} className={styles.card}><RealEstateListElement realEstate={e}></RealEstateListElement></div>)}
        </>
    )
}

export default RealEstateList;