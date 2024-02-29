import { useEffect, useState, useContext } from "react";
import styles from "./UserProfile.module.css";
import { getUser, updateUser } from "../../../utils/apis/userApi";
import UserContext from "../../../context/UserContext";
import PersonalData from "../PersonalData/PersonalData";
import MyAds from "../MyAds/MyAds";
import MyFavorites from "../MyFavorites/MyFavorites";
// import { Tooltip } from 'react-tooltip'

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("personalData");

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

  const handleUpdateUser = async (data) => {
    try {
      const response = await updateUser(user._id, data);
      if (response) {
        setUserData(response.data);
      } else {
        console.error("No response from updateUser");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleTabClick = (tab) => {
    if (tab === "publications" || tab === "favorites") {
      alert("Lanzamiento planeado próximamente");
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={styles.userProfile}>
      <>
        <h1>{userData?.name}</h1>
        <h2>{userData?.email}</h2>
      </>
      {/* Tab nav */}
      <ul className={styles.tabnav}>
        <li
          className={
            activeTab === "personalData"
              ? styles.navitemselected
              : styles.navitem
          }
        >
          <a
            className={
              activeTab === "personalData"
                ? styles.navlinkactive
                : styles.navlink
            }
            href="#"
            onClick={() => setActiveTab("personalData")}
          >
            Datos personales
          </a>
        </li>
        <li
          className={
            activeTab === "publications"
              ? `${styles.navitemselected} ${styles.disabled}`
              : styles.navitem
          }
        >
          <a
            className={
              activeTab === "publications"
                ? styles.navlinkactive
                : styles.navlink
            }
            href="#"
            onClick={() => handleTabClick("publications")}
          >
            Mis logros
          </a>
        </li>
        <li
          className={
            activeTab === "favorites"
              ? `${styles.navitemselected} ${styles.disabled}`
              : styles.navitem
          }
        >
          <a
            className={
              activeTab === "favorites" ? styles.navlinkactive : styles.navlink
            }
            href="#"
            onClick={() => handleTabClick("favorites")}
          >
            Mi privacidad
          </a>
        </li>
      </ul>

      {/* <Tooltip id="publications" />
      <Tooltip id="favorites" /> */}

      {/* Tab content */}
      <div className={styles.tabcontent}>
        {activeTab === "personalData" && (
          <PersonalData
            userData={userData}
            handleUpdateUser={handleUpdateUser}
          />
        )}
        {activeTab === "publications" && (
          <MyAds ads={userData?.ads} emptyMessage="No tienes ningún anuncio" />
        )}
        {activeTab === "favorites" && (
          <MyFavorites
            favorites={userData?.favorites}
            emptyMessage="No tienes ningún favorito"
          />
        )}
      </div>

    </div>
  );
};

export default UserProfile;
