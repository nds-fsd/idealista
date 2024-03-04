import React, { useContext, useEffect } from "react";
import favoriteApi from "../../utils/apis/favoriteApi";
import RealEstateListElement from "../realEstates/realEstateList/RealEstateListElement";
import { useQuery } from "react-query";
import UserContext from "../../context/UserContext";
import styles from "./Favorite.module.css";
import imageFavoritos from "../../assets/Favoritos.jpg";
import iconFavoritos from "../../assets/iconsSVG/heart-svgrepo-com.svg";
import logoError from "../../assets/Logo_error.svg";
import CircularProgress from "@mui/material/CircularProgress";

const Favorite = () => {
    const { user } = useContext(UserContext);
    const { data, isLoading, refetch } = useQuery(["favorite", user], () => {
        if (user && user._id) {
            return favoriteApi.getFavorites({ userId: user._id });
        } else {
            return Promise.resolve(null);
        }
    });

    useEffect(() => {
        refetch();
    }, [user, refetch]);

    const deleteById = async (realEstate) => {
        await favoriteApi.removeById({ userId: user._id, realestateId: realEstate._id });
        refetch();
    };

    if (isLoading) {
        return (
            <div className={styles.containerloading}>
                <CircularProgress />
            </div>
        );
    }

    if (!data)
        return (
            <div className={styles.containerloading}>
                <div className={styles.nodata}>
                    <h2>¡Algo anda mal aquí!</h2>
                    <div className={styles.iconError}>
                        <img src={logoError} alt="icon error" />
                    </div>
                </div>
            </div>
        );

    if (user && data && data.length > 0) {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.imghead}>
                        <img src={imageFavoritos} alt="imagen Mis Favoritos" />
                        <div className={styles.text_misanuncios}>
                            <h1>Mis favoritos</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.listfavoritos}>
                    <div className={styles.favoritosContainer}>
                        {data.map((e) => {
                            const realEstate = e.realEstate;
                            realEstate.fav = true;
                            return <RealEstateListElement key={realEstate._id} realEstate={realEstate} onFavorite={deleteById} />;
                        })}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.imghead}>
                        <img src={imageFavoritos} alt="imagen Mis Favoritos" />
                        <div className={styles.text_misanuncios}>
                            <h1>Mis favoritos</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.listrealestates}>
                    <div className={styles.nodata}>
                        <h2>¡Hazlo real en Realista!</h2>
                        <p>
                            {" "}
                            <span>{user.name}</span> tus favoritos están vacíos.
                        </p>
                        <div style={{ height: "20px" }}></div>
                        <span>
                            Explora nuestra selección y marca tus propiedades favoritas con un simple clic
                            <div className={styles.iconfavoritos}>
                                <img src={iconFavoritos} alt="icon favoritos" />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
};

export default Favorite;
