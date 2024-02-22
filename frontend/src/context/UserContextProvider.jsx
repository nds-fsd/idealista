import UserContext from "./UserContext";
import toast from "react-hot-toast"
import { useState, useEffect } from "react";
import { RegisterUser, loginUser } from "../utils/apis/userApi";
import { useNavigate } from "react-router-dom";
import { getUserSession, setUserSession, removeSession } from "../utils/apis/localStorage";


function UserContextProvider({ children }) {
    const currentUser = JSON.parse(localStorage.getItem("user")) || null;
    const [token, setToken] = useState(getUserSession()?.token)
    const [user, setUser] = useState(currentUser)
    const [error, setError] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onRegister = async (data) => {
        try {
            const response = await RegisterUser(data);
            console.log(response);
            setUserSession(response.data);
            setUser(response.data.user);
            setIsLoggedIn(true)
            setLoading(false)
            navigate("/")
            toast.success("Registro exitoso");

        } catch (error) {
            console.error("Error al intentar registrarse", error)
            setError(error);
            setIsLoggedIn(false);
            setLoading(false);
        }
    };

    const onLogin = async (data) => {
        try {
            const response = await loginUser(data);
            if (response.data) {
                setUserSession(response.data);
                setUser(response.data.user);
                setToken(response.data.token);
                setIsLoggedIn(true)
                setLoading(false)
                navigate("/")
                toast.success("Inicio de sesión exitoso");
            } else {
                setError(error);
                setIsLoggedIn(false);
                setLoading(false);
                toast.error("Error al intentar iniciar sesión")
            }


        } catch (error) {
            console.error("Error al intentar iniciar sesión", error)
            setError(error);
            setIsLoggedIn(false);
            setLoading(false);
        }
    }

    const logOut = () => {
        removeSession();
        setToken(null)
        setUser(null);
        setIsLoggedIn(false);
        navigate("/");
        toast("Sesión cerrada con éxito")
    };



    useEffect(() => {

        const session = getUserSession();
        if (session) {
            setUser({ ...session.user });
        }

    }, [])

    const value = { user, token, onLogin, logOut, isLoggedIn, loading, error, onRegister }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider