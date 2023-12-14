import React, { useState, useEffect } from 'react';
import { getRealEstates } from '../../../_utils/api';
import RealEstateListElement from '../../realestates/realestatelistelement/RealEstateListElement.jsx';

const RealEstateList = ({ getAll, searchParams }) => {
    const [realEstates, setRealEstates] = useState([]);

    useEffect(() => {
        const fetchRealEstates = async () => {
            try {
                let url = '/realestates';
                if (!getAll) {
                    url += `?searchParams=${JSON.stringify(searchParams)}`;
                }
                const response = await getRealEstates(url); // Llamamos getRealEstates funcion desde api.js
                setRealEstates(response);
            } catch (error) {
                console.error('Error fetching real estates:', error);
            }
        };

        fetchRealEstates();
    }, [getAll, searchParams]);

    return (
        <div className={styles.container}>
            {realEstates.map((realEstate) => (
                <RealEstateListElement key={realEstate.id} realEstate={realEstate} />
            ))}
        </div>
    );
};

export default RealEstateList;
