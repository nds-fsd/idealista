import { useEffect, useState } from "react";

import styles from "./RealEstates.module.css";



function RealEstateNumber(props) {
    const {number, setNumber} = props;
    const [numberButtons, setNumberButtons] = useState(number);

    const boxes = [
        {description: "+1", value: 1},
        {description: "+2", value: 2},
        {description: "+3", value: 3},
        {description: "+4", value: 4}
    ];

    useEffect(() => {
        setNumberButtons(number);
    }, [numberButtons])
    
    const handlerBoxOnClick = (event) => {
        setNumberButtons(Number(event.target.value));
        setNumber(Number(event.target.value));
    }

    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            {boxes.map((box) => {
                return (
                    <button className={(box.value === number) ? styles.boxnumberselected : styles.boxnumberunselected} 
                            key={box.value} value={box.value} onClick={handlerBoxOnClick}>{box.description}</button>
                )
            })}
        </div>
    )
}

export default RealEstateNumber;