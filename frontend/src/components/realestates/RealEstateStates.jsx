import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import realEstateApi from "../../utils/apis/realEstateApi";

import styles from "./RealEstates.module.css";



function RealEstateStates(props) {
    const {realEstateStates, setRealEstateStates} = props;

    const { data, isLoading, isSuccess } = useQuery("realestateStates", () => realEstateApi.GetRealEstateStates());
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>Something went wrong</div>

    const handlerStatusOnChange = (event) => {
        setRealEstateStates((prevCheckboxes) => ({
            ...prevCheckboxes,
            [event.target.value]: !prevCheckboxes[event.target.value]
          }));
    }

    return (
        <>
            {data && data.map((element) => {
                return (
                    <div key={"div"+element._id}>
                        <label htmlFor={element._id}>
                            <input type="checkbox" id={element._id} key={"chk"+element._id} value={element.value} checked={realEstateStates[element.value]} onChange={handlerStatusOnChange} />
                            {element.description}
                        </label>                        
                    </div>
                )
            })}
        </>
    ) 
}

export default RealEstateStates;