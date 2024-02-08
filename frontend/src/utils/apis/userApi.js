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
        return error.response;
    }
};

const loginUser = async ({email,password}) =>{
    try{
        const response = await api.post("login",{
            email: email,
            password:password,
        });
        return response;
        
    }
    catch(error){
        console.error("Login error", error.message);
        return error.response;
    }
};

const GetUser = async (id) => {
    if (!id) {
        console.error("Invalid user ID");
        return;
    }
    try {
        const response = await api.get(`users/${id}`);
        const { email, name, location } = response.data;
        return { email, name, location };
    } catch (error) {
        console.error("Get user error", error.message);
        return error.response;
    }
}

const UpdateUser = async ({ id, email, name, location }) => {
    try {
        const response = await api.put(`users/${id}`, {
            email: email,
            name: name,
            location: location,
        });
        return response;
    } catch (error) {
        console.error("Update user error", error.message);
        return error.response;
    }
};

export { RegisterUser, loginUser, GetUser, UpdateUser };
