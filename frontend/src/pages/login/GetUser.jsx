import axios from "axios"
import { loginUser } from "../utils/apis/userApi";


    const getUsers = async () => {

        const isAuthenticated = localStorage
        try {
        const response = await loginUser(data, {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.statusText);
        }
        } catch (error) {
        console.error(error);
        return [];
        }
        };

export default getUsers