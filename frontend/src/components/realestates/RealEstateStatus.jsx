import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import realEstateApi from "../../utils/apis/realEstateApi";

import styles from "./RealEstates.module.css";



function RealEstateStatus(props) {
    //const [realEstateStatus, setRealEstateStatus] = useState({"Obra-nueva": false,"Buen-estado": false,"A-reformar": false});
    const [realEstateStatus, setRealEstateStatus] = props;

    const { data, isLoading, isSuccess } = useQuery("realestateStatus", () => realEstateApi.GetRealEstateStatus());
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>Something went wrong</div>

/*     if (isSuccess) {
        for(let i=0; i<=data.length-1; i++){
            setRealEstateStatus((prevCheckboxes) => ({
                ...prevCheckboxes,
                [data[i].value]: false,
              }));
        } 
        console.log("checkboxNames: ", realEstateStatus) 
    }  */


/*     const handlerChecboxStatusOnChange = (event) => {
        setRealEstateStatus((prevCheckboxes) => ({
            ...prevCheckboxes,
            [event.target.value]: !prevCheckboxes[event.target.value]
          }));
    } */

    return (
        <>
            {data && data.map((element) => {
                return (
                    <div key={"div"+element._id}>
                        <label htmlFor={element._id}>
{/*                             <input type="checkbox" id={element._id} name={element._id} key={"chk"+element._id} value={element.value} 
                                   checked={prevCheckboxValue.element.value} />
                            {element.description} */}
                            <input type="checkbox" id={element._id} key={"chk"+element._id} value={element.value} onChange={props.handlerLocationOnChange} />
                            {element.description}
                        </label>                        
                    </div>
                )
            })}
        </>
    ) 
}

export default RealEstateStatus;