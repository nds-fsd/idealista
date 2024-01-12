import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import realEstateApi from "../../utils/apis/realEstateApi";

import styles from "./RealEstates.module.css";



function RealEstateOperation(props) {
    const {realEstateOperationValue, setRealEstateOperationValue} = props;
    const [realEstateOperation, setRealEstateOperation] = useState("");

    useEffect(() => {
        setRealEstateOperation(realEstateOperationValue);
    }, [])
    
    const handlerRealEstateOnChange = (event) => {
        setRealEstateOperation(event.target.value);
        setRealEstateOperationValue(event.target.value);
    }

    const { data, isLoading } = useQuery("realestateOperation", () => realEstateApi.GetRealEstateBuyOperations());
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>Something went wrong</div>

    return (
        <>
            <select className={styles.realestatetype} value={realEstateOperation} onChange={handlerRealEstateOnChange}>
                {data && data.map((element) => {
                    return <option key={element._id} value={element.value}>{element.description}</option>
                })}
            </select>
        </>
    ) 
}

export default RealEstateOperation;