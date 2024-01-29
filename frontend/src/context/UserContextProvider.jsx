import UserContext from "./UserContext";
import authenticateUser from "../utils/apis/authenUser";
import { useState,useEffect } from "react";
import { loginUser } from "../utils/apis/userApi";
import {useNavigate} from "react-router-dom";
import { setUserSession } from "../utils/apis/localStorage";

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

                /*localStorage.setItem("token",response.data.token);
                localStorage.setItem("user",JSON.stringify(response.data.user))
                ;*/
                console.log("token",response.data.token);
                const user= response.data.user.name;
                console.log("nombre",user)

                navigate("/")
        } catch (error){
            console.error("Error al intentar iniciar sesión",error)
            setError(error);
            setIsLoggedIn(false);
            setLoading(false);
            
        }
    };


    useEffect(() => {
    try {
            authenticateUser(setIsLoggedIn,setLoading,setUser)
            
        } catch (error) {
            console.log(error)
            return
        }
    }, [])
    
    return (
        <UserContext.Provider value={{user,onLogin,isLoggedIn,loading,error}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider