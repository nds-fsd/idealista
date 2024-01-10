import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import realEstateApi from "../../utils/apis/realEstateApi";

import styles from "./RealEstates.module.css";



function RealEstateStatus(props) {
    const { data, isLoading } = useQuery("realestateStatus", () => realEstateApi.GetRealEstateStatus());
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>Something went wrong</div>

    const checkboxNames = data.map((element) => {
        return {[element.value]: false};
    });
    console.log("checkboxNames: ", checkboxNames)
    
    const [realEstateStatus, setRealEstateStatus] = useState(checkboxNames);
    
    const handlerRealEstateOnChange = (checkboxName) => {
        setRealEstateStatus((prevCheckboxValue) => ({
            ...prevCheckboxValue,
            [checkboxName]: checkboxValue,
        }));
        console.log("checkbox:", realEstateStatus);
    }


    return (
        <>
            {data && data.map((element) => {
                return (
                    <div key={"div"+element._id}>
                        <label>
                            <input type="checkbox" id={element._id} name={element._id} key={"chk"+element._id} value={element.value} 
                                   checked={prevCheckboxValue.element.value} onChange={handlerRealEstateOnChange(element.value)}/>
                            {element.description}
                        </label>                        
                    </div>
                )
            })}
        </>
    ) 
}

export default RealEstateStatus;