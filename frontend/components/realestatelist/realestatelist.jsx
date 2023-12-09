import React, { useState, useEffect } from 'react';
import { getRealEstates } from './api';
import RealEstateCard from '../realestatecard/RealEstateCard';

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
                <RealEstateCard key={realEstate.id} realEstate={realEstate} />
            ))}
        </div>
    );
};

export default RealEstateList;
