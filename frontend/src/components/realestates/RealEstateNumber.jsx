import { useEffect } from "react";

import styles from "./RealEstates.module.css";



function RealEstateNumber(props) {
    const {fields, number, setNumber} = props;
    const boxes = [
        {description: "+1", value: 1},
        {description: "+2", value: 2},
        {description: "+3", value: 3},
        {description: "+4", value: 4}
    ];
    
    useEffect(() => {
        setNumber(number);

/*         for(let i=1; i<=fields; i++){
            boxes.push({description: "+"+i, value: i});
        }  */
    })

    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            {boxes.map((box) => {
                return <div className={styles.boxnumber} id={box.value}>{box.description}</div>
            })}
        </div>
    )
}

export default RealEstateNumber;