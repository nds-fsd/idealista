import { useEffect, useState, useContext } from "react";
import styles from "./UserProfile.module.css";
import { getUser, updateUser } from "../../../utils/apis/userApi";
import UserContext from "../../../context/UserContext";
import PersonalData from "../PersonalData/PersonalData";
import MyAds from "../MyAds/MyAds";
import MyFavorites from "../MyFavorites/MyFavorites";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [activeTab, setActiveTab] = useState("personalData");

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser(user._id);
        if (response) {
          setUserData(response.data);
        } else {
          console.error("No response from getUser");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user?._id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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

  return (
    <div className={styles.userProfile}>
      <h1>{userData?.name}</h1>
      <h2>{userData?.email}</h2>
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
            onClick={() => handleTabClick("personalData")}
          >
            Datos personales
          </a>
        </li>
        <li
          className={
            activeTab === "publications"
              ? styles.navitemselected
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
            Mis publicaciones
          </a>
        </li>
        <li
          className={
            activeTab === "favorites" ? styles.navitemselected : styles.navitem
          }
        >
          <a
            className={
              activeTab === "favorites" ? styles.navlinkactive : styles.navlink
            }
            href="#"
            onClick={() => handleTabClick("favorites")}
          >
            Mis favoritos
          </a>
        </li>
      </ul>
      {/* Tab content */}
      <div className={styles.tabcontent}>
        {activeTab === "personalData" && (
          <PersonalData
            userData={userData}
            handleUpdateUser={handleUpdateUser}
          />
        )}
        <MyAds ads={userData?.ads} emptyMessage="No tienes ningún anuncio" />
        <MyFavorites
          favorites={userData?.favorites}
          emptyMessage="No tienes ningún favorito"
        />
      </div>
    </div>
  );
};

export default UserProfile;
