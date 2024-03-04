import api from "./apiWrapper";

const addFavorite = async ({ userId, realestateId }) => {
    try {
        const response = await api.post("favorite", {
            userId: userId,
            realestateId: realestateId
        });
        return response.data;
    } catch (error) {
        console.error("Favorite error", error.message);
        return error.response;
    }
};

const getFavorites = async ({ userId }) => {
    try {
        const response = await api.get(`users/${userId}/favorite`);
        return response.data;
    } catch (error) {
        console.error("Error fetching favorites", error.message)
        return error.response
    }
}


const removeById = async ({ userId, realestateId }) => {
    try {
        const response = await api.delete(`users/${userId}/favorite/${realestateId}`);
        return response.data;
    } catch (error) {
        console.error("Error removing favorites", error.message)
        return error.response
    }
}


export default { addFavorite, getFavorites, removeById };