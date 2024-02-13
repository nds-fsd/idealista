import { useEffect, useState, useContext } from "react";
import styles from "./userProfile.module.css";
import { getUser } from "../../../utils/apis/userApi";
import UserContext from "../../../context/UserContext";
import PersonalData from '../PersonalData/PersonalData';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser(user._id);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className={styles.userProfile}>
      <>
        <h1>{userData?.name}</h1>
        <h2>{userData?.email}</h2>
      </>
      {/* Tab nav */}
      <ul className={styles.tabnav}>
        <li className={styles.navitemselected}>
          <a className={styles.navlinkactive} href="#">
            Datos personales
          </a>
        </li>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="#">
            Mis publicaciones
          </a>
        </li>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="#">
            Mis favoritos
          </a>
        </li>
      </ul>
      {/* Tab content */}
      <div className={styles.tabcontent}>
      <PersonalData userData={userData} />
      </div>
    </div>
  );
};

export default UserProfile;
