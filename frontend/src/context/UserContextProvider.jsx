import UserContext from "./UserContext";
import toast from "react-hot-toast"
import { useState,useEffect } from "react";
import { RegisterUser, loginUser } from "../utils/apis/userApi";
import {useNavigate} from "react-router-dom";
import { getUserSession, setUserSession,removeSession } from "../utils/apis/localStorage";


const UserContextProvider = ({children}) => {
    const currentUser = JSON.parse(localStorage.getItem("userData")) || null;
    const [user,setUser] = useState(currentUser)
    const [error, setError] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    console.log("User Context user", user)

    const onRegister = async(data) =>{
        try{
            const response = await RegisterUser(data);
            console.log(response);
            setUserSession(response.data);
            setUser(response.data.user);
            setIsLoggedIn(true)
            setLoading(false)
            navigate("/")
            console.log(response.data)
            toast.success("Inicio de sesión exitoso");
    } catch (error){
        console.error("Error al intentar iniciar sesión",error)
        setError(error);
        setIsLoggedIn(false);
        setLoading(false);
        toast.error("Error al intentar iniciar sesión");
        
    }
};

    const onLogin = async (data) => {
        console.log(data)
        try{
            const response = await loginUser(data);
                setUserSession(response.data);
                setUser(response.data.user);
                setIsLoggedIn(true)
                setLoading(false)
                navigate("/")
                console.log(response.data)
            toast.success("Inicio de sesión exitoso");
                
        } catch (error){
            console.error("Error al intentar iniciar sesión",error)
            setError(error);
            setIsLoggedIn(false);
            setLoading(false);
            toast.error("Error al intentar iniciar sesión");
            
        }
    };

    const logOut = () => {
        removeSession();
        setUser(null);
        setIsLoggedIn(false);
        navigate("/");
        toast("Sesión cerrada con éxito")
    };
    
    

    useEffect(() => {

        const session = getUserSession();
        if(session){
        console.log("Hay usuario",session.user)
        setUser({...session.user});}
        
    }, [])
    
    const value = {user,onLogin,logOut,isLoggedIn,loading,error,onRegister}
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider