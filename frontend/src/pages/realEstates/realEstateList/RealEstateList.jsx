import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import RealEstateListElement from "./RealEstateListElement";
import { ListRealState } from "../../../utils/apis/realEstateApi";

import styles from "./RealEstateList.module.css";


function RealEstateList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const operation = queryParams.get("operation");
    const localization = queryParams.get("location");
    const realEstateType = queryParams.get("realestatetype");

    const { data, isLoading } = useQuery("realEstateList", () => ListRealState({ operation, location: localization, realestatetype: realEstateType }))

    if (isLoading) return <div> Loading... </div>

    if (!data) return <div> Something went wrong </div>

    return (
        <div className={styles.list}>
            <h2>{operation + " > " + localization + " > " + realEstateType}</h2>
            {data?.map(e => <RealEstateListElement key={e._id} realEstate={e}></RealEstateListElement>)}
        </div>
    )
}

export default RealEstateList;