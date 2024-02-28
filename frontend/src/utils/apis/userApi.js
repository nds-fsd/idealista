import api from "./apiWrapper";

const RegisterUser = async ({ email, password, name, location }) => {
    try {
        const response = await api.post("users", {
            email: email,
            password: password,
            name: name,
            location: location
        });
        return response;
    } catch (error) {
        console.error("Registration error", error.message);
        return error.message;
    }
};

const loginUser = async ({email,password}) =>{
    try{
        const response = await api.post("login",{
            email: email,
            password:password
        });
        return response;
    } catch(error){
        console.error("Login error", error.message);
        return error.message;
    }
};

export const getUser = async (id) => {
    try {
        const response = await api.get(`users/${id}`);
        console.log("Get user response", response);
        return response;
    } catch (error) {
        console.error("Get user error", error.message);
        return error.response;
    }
};

export const updateUser = async (id, data) => {
    try {
        const response = await api.put(`users/${id}`, data);
        console.log("Update user response", response);
        
        // Unlock achievement code goes here
        const achievement = { id: 2, title: 'Profile Updated', description: 'You updated your profile!', completed: true };
        response.data.achievement = achievement;
        
        return response;
    } catch (error) {
        console.error("Update user error", error.message);
        throw error;
    }
};

export { RegisterUser, loginUser }