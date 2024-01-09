import api from "./apiWrapper";

const RegisterUser = async ({ email, password, name, location }) => {
    try {
        const response = await api.post("users", {
            email: email,
            password: password,
            name: name,
            location: location
        });
        console.log("Registration successful", response.data);
        return response.response;
    } catch (error) {
        console.error("Registration error", error);
        return error.response;
    }
};

export { RegisterUser }