import React, { useState, useEffect } from 'react';
import { getRealEstates } from './api';
import RealEstateCard from '../realestatecard/RealEstateCard';

const RealEstateList = ({ getAll, searchParams }) => {
    const [realEstates, setRealEstates] = useState([]);

    useEffect(() => {
        // Fetch real estates based on getAll or searchParams from MongoDB schema
        // Replace the API endpoint and query logic with our implementation
        const fetchRealEstates = async () => {
            try {
                let url = '/realestates';
                if (!getAll) {
                    url += `?searchParams=${JSON.stringify(searchParams)}`;
                }
                const response = await fetch(url);
                const data = await response.json();
                setRealEstates(data);
            } catch (error) {
                console.error('Error fetching real estates:', error);
            }
        };

        fetchRealEstates();
    }, [getAll, searchParams]);

    return (
        <div>
            {realEstates.map((realEstate) => (
                <RealEstateCard key={realEstate.id} realEstate={realEstate} />
            ))}
        </div>
    );
};

export default RealEstateList;
