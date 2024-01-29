import axios from "axios";
import { getUserToken,setUserSession,removeSession} from "./localStorage";


const authenticateUser = async (setIsLoggedIn,setLoading,setUser) => {
    setLoading(true);
    const storedToken = getUserToken();

    if (storedToken) {
        try {
        const response = await axios.get(`${process.env.MONGO_URL}/api/v1/auth/verify`, {
        headers: { Authorization: `Bearer ${storedToken}` },
        });

        setIsLoggedIn(true);
        setLoading(false);
        setUser(response.data.token);

        setUserSession(response.data.token)
    } catch (error) {
        setIsLoggedIn(false);
        setLoading(false);
        setUser(null);
        removeSession();
    }
    } else {
    setIsLoggedIn(false);
    setLoading(false);
    setUser(null);
    }
};

export default authenticateUser