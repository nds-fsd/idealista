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

export { RegisterUser, loginUser }