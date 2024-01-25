import UserContext from "./UserContext";
import { useState,useEffect } from "react";


function UserContextProvider({children}) {
    const currentUser = JSON.parse(localStorage.getItem("user")) || null;
    const [user,setUser] = useState(null)

    useEffect(() => {
       try {
            if (currentUser) {
                console.log("el nombre es",currentUser.name)
            }
            
        } catch (error) {
            console.log(error)
            return
        }
    }, [])
    
    return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
    )

}

export default UserContextProvider
