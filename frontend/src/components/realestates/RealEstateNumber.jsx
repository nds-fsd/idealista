import { useEffect } from "react";

function RealEstateNumber(props) {
    const {fields, number, setNumber} = props;
    const boxes = [];
    
    useEffect(() => {
        setNumber(number);

        for(let i=1; i=fields; i++){
            boxes[i] = {description: "+"+i, value: i}
        }
    })

    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            {boxes.map((box) => {
                return <div style={{border: "1px solid #FFFFFF"}}>box.description</div>
            })}
        </div>
    )
}

export default RealEstateNumber;