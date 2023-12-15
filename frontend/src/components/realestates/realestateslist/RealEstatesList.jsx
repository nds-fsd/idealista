import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { getRealEstates } from '../../../_utils/api';
import RealEstateListElement from "../realestatelistelement/RealEstateListElement";

import styles from './RealEstatesList.module.css'



const RealEstateList = ({ getAll, searchParams }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const operation = queryParams.get("operation");
    const localization = queryParams.get("location");
    const realEstateType = queryParams.get("realestatetype");
    
    const [realEstates, setRealEstates] = useState([]);

    useEffect(() => {
        const fetchRealEstates = async () => {
            try {
                const response = await getRealEstates();
                setRealEstates(response);
            } catch (error) {
                console.error('Error in RealEstateList.jsx:', error.message);
            }
        };

        fetchRealEstates();
    }, [getAll, searchParams]);

    return (
        <>
            <h1>Real State List</h1>
            <div className={styles.container}>
                {realEstates.map((realEstate) => (
                    <RealEstateListElement key={realEstate._id} realEstate={realEstate} />
                ))}
            </div>
        </>
    )
}

export default RealEstateList;