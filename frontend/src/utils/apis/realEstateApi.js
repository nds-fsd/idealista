import api from "./apiWrapper";
import axios from "axios";


const GetRealEstate = (id) => {
    return api.get(`realestates/${id}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
}

const ListRealState = (query) => {
    let q = "?"
    if (query.operation)
        q += `operation=${query.operation}`
    if (query.location)
        q += `&location=${query.location}`
    if (query.realestatetype)
        q += `&realEstateType=${query.realestatetype}`
    if (query.price)
        q += `&price=${query.price}`
    if (query.states)
        q += `&state=${query.states}`
    if (query.rooms)
        q += `&rooms=${query.rooms}`
    if (query.bathrooms)
        q += `&bathrooms=${query.bathrooms}`

    return api.get(`realestates${q}`)
        .then(res => res.data)
        .catch(e => console.log(e));
}

const getCoordinates = async (address) => {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: process.env.GOOGLE_APIKEY
            }
        });

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return [location.lat, location.lng];
        } else {
            throw new Error('Unable to find coordinates for the provided address.');
        }
    } catch (error) {
        console.log("Error in getCoordinates:", error.message);
        throw error;
    }
}

const getPublicCoordinates = async (publicAddress) => {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: publicAddress,
                key: process.env.GOOGLE_APIKEY
            }
        });

        if (response.status === 200) {
            const location = response.data.results[0].geometry.location;
            return [location.lat, location.lng];
        } else {
            throw new Error('Unable to find coordinates for the provided public address.');
        }
    } catch (error) {
        console.log("Error in getPublicCoordinates:", error.message);
        throw error;
    }
}

export const CreateRealEstate = async (data) => {
    try {
        const coordinates = await getCoordinates(data.address);
        const publicCoordinates = await getPublicCoordinates(data.publicAddress);

        data.mapLocation = {
        type: "Point",
        coordinates: coordinates,
        };

        data.publicMapLocation = {
        type: "Point",
        coordinates: publicCoordinates,
        };

        return api
        .post(`/realestates`, data)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    } catch (e) {
        console.log(e);
    }
};

const GetRealEstateBuyOperations = () => {
    try {
        return api.get(`masterdata/realestate/buyoperations`)
            .then(response => response.data)
            .catch((error) => console.log(error.message));
    } catch(error) {
        console.log("Error in realEstateApi.js:", error.message);
    }
}

const GetRealEstateStates = () => {
    try {
        return api.get(`masterdata/realestate/states`)
            .then(response => response.data)
            .catch((error) => console.log(error.message));
    } catch(error) {
        console.log("Error in realEstateApi.js:", error.message);
    }
}

const GetRealEstateTypes = () => {
    try {
        return api.get(`masterdata/realestate/types`)
            .then(response => response.data)
            .catch((error) => console.log(error.message));
    } catch(error) {
        console.log("Error in realEstateApi.js:", error.message);
    }
}

export default { 
    GetRealEstate, 
    ListRealState, 
    GetRealEstateBuyOperations, 
    GetRealEstateStates, 
    GetRealEstateTypes,
    getCoordinates,
    getPublicCoordinates
};