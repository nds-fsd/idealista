import React from "react";
import { Link } from "react-router-dom";

function RealEstateListElement({ realEstate }) {

    return (
        <Link to={`/realestates/${realEstate._id}`}>
            <div >
                <p>{realEstate.shortDescription}</p>
                <p>{realEstate.price}</p>
            </div>
        </Link>
    )
}

export default RealEstateListElement;