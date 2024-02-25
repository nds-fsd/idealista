import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import realEstateApi from "../../utils/apis/realEstateApi";
import RealEstateListElement from "../realEstates/realEstateList/RealEstateListElement";
import { useQuery } from "react-query";
import UserContext from "../../context/UserContext";
import styles from "./Anuncios.module.css";
import imageAnuncio from "../../assets/Mis_anuncios.jpg";
import CircularProgress from "@mui/material/CircularProgress";

const Anuncios = () => {
  const { user } = useContext(UserContext);
  const { data, isLoading, isError, refetch } = useQuery(["realestates", user ? user._id : null], () => {
    if (user) {
      return realEstateApi.GetByUserId(user._id);
    } else {
      return Promise.resolve(null);
    }
  });

  useEffect(() => {
    refetch();
  }, [user, refetch]);

  if (isLoading) {
    return (
      <div className={styles.containerloading}>
        <CircularProgress />
      </div>
    );
  }

  if (isError) return <div>Something went wrong</div>;

  if (user && data && data.length > 0) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.imghead}>
            <img src={imageAnuncio} alt="imagen Mis anuncios" />
            <div className={styles.text_misanuncios}>
              <span>Mis anuncios</span>
            </div>
          </div>
        </div>
        <div className={styles.listrealestates}>
          <div className={styles.anunciosContainer}>
            {data.map((realEstate) => (
              <RealEstateListElement key={realEstate._id} realEstate={realEstate} showFavorite={false} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.imghead}>
            <img src={imageAnuncio} alt="imagen Mis anuncios" />
            <div className={styles.text_misanuncios}>
              <h1>Mis anuncios</h1>
            </div>
          </div>
        </div>
        <div className={styles.listrealestates}>
          <div className={styles.nodata}>
            <h2>¡Hazlo real en Realista!</h2>
            <p>
              <span>{user.name}</span> todavía no has publicado ningún anuncio.
            </p>
            <div style={{ height: "20px" }}></div>
            <span>¡Es hora de mostrar tus propiedades al mundo!</span>
            <Link to="/realestates/create" className={styles.navcontent}>
              <button className={styles.buttonad}>Publica gratis tu anuncio</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Anuncios;
