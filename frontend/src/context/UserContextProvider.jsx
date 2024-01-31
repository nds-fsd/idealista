import UserContext from "./UserContext";
import toast from "react-hot-toast"
import { useState,useEffect } from "react";
import { loginUser } from "../utils/apis/userApi";
import {useNavigate} from "react-router-dom";
import { getUserSession, setUserSession,removeSession } from "../utils/apis/localStorage";


function UserContextProvider({children}) {
    const currentUser = JSON.parse(localStorage.getItem("user")) || null;
    const [user,setUser] = useState(currentUser)
    const [error, setError] = useState(null)
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const onLogin = async(data)=>{
        try{
            const response = await loginUser(data);
                setUserSession(response.data);
                setUser(response.data.user);
                setIsLoggedIn(true)
                setLoading(false)
                navigate("/")
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
    };
    
    

    useEffect(() => {

        const session = getUserSession();
        if(session){
        console.log("Hay usuario",session.user)
        setUser({...session.user});}
    }, [])
    
    return (
        <UserContext.Provider value={{user,onLogin,logOut,isLoggedIn,loading,error}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider