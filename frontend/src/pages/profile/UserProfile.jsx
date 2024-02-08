import { useEffect, useState } from "react";
import styles from "./userProfile.module.css";
import { getUser } from "../../utils/apis/userApi";

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const id = '659e8ca8b95a7cb7353b6ddd';

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUser(id);; // Replace with the actual API call to fetch user data
                setUserData(response.data); // Assuming the response contains the user data
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className={styles.userProfile}>
            {userData && (
                <>
                    <h1>{userData.name}</h1>
                    <h2>{userData.email}</h2>
                    <p>{userData.location}</p>
                </>
            )}
        </div>
    );
}

export default UserProfile;