import api from "./apiWrapper";

export const addAchievement = async (data) => {
    try {
        const response = await api.post("achievements", data);
        return response.data;
    } catch (error) {
        console.error("Achievement error", error.message);
        return error.response;
    }
};
