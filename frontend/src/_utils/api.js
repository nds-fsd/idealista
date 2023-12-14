import axios from "axios";
const API_URL = "http://localhost:3001/realestates";

export const getRealEstates = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error("Failed to get real estates: " + error.message);
    }
};

export const getRealEstate = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to get real estate with ID " + id + ": " + error.message);
    }
};

export const addRealEstate = async (realEstate) => {
    try {
        const response = await axios.post(API_URL, realEstate);
        return response.data;
    } catch (error) {
        throw new Error("Failed to add real estate: " + error.message);
    }
};

export const updateRealEstate = async (id, realEstate) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, realEstate);
        return response.data;
    } catch (error) {
        throw new Error("Failed to update real estate with ID " + id + ": " + error.message);
    }
};

export const deleteRealEstate = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to delete real estate with ID " + id + ": " + error.message);
    }
};
