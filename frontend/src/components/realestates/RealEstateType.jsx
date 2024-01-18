import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import realEstateApi from "../../utils/apis/realEstateApi";

import styles from "./RealEstates.module.css";



function RealEstateType(props) {
    const {realEstateTypeValue, setRealEstateTypeValue} = props;
    const [realEstateType, setRealEstateType] = useState("");

    useEffect(() => {
        setRealEstateType(realEstateTypeValue);
    }, [])
    
    const handlerRealEstateOnChange = (event) => {
        setRealEstateType(event.target.value);
        setRealEstateTypeValue(event.target.value);
    }

    const { data, isLoading } = useQuery("realestateType", () => realEstateApi.GetRealEstateTypes());
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>Something went wrong</div>

    return (
        <>
            <select className={styles.select} value={realEstateType} onChange={handlerRealEstateOnChange}>
                {data && data.map((element) => {
                    return <option key={element._id} value={element.value}>{element.description}</option>
                })}
            </select>
        </>
    ) 
}

export default RealEstateType;