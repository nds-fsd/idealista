import React, { useState, useEffect } from 'react';
import { getRealEstates } from '../../../_utils/api';
import RealEstateListElement from '../../realestates/realestatelistelement/RealEstateListElement.jsx'
import styles from './RealEstatesList.module.css'

const RealEstateList = ({ getAll, searchParams }) => {
    const [realEstates, setRealEstates] = useState([]);

    useEffect(() => {
        const fetchRealEstates = async () => {
            try {
                const response = await getRealEstates();
                setRealEstates(response);
            } catch (error) {
                console.error('Error fetching real estates:', error);
            }
        };

        fetchRealEstates();
    }, [getAll, searchParams]);

    console.log("Estos son los datos que nos llega de la peticion", realEstates)
    return (
        <>
            <h1>Real State List</h1>
            <div className={styles.container}>
                {realEstates.map((realEstate) => (
                    <RealEstateListElement key={realEstate._id} realEstate={realEstate} />
                ))}
            </div>
        </>
    );
};

export default RealEstateList;
