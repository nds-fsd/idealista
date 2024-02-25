import React, { useEffect, useContext, useState } from "react";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import UserContext from "../../../context/UserContext";

import realEstateApi from "../../../utils/apis/realEstateApi";
import Carousel from "./RealEstateDetailsCarousel";
import GoogleMapsReactWrapper from "../../../components/googleMaps/reactWrapper/GoogleMapsReactWrapper";
import GoogleMapsIndividual from "../../../components/googleMaps/map/GoogleMapsIndividual";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./RealEstateDetails.module.css";
import logoError from "../../../assets/Logo_error.svg";
import TextArea from "./TextArea";

import UseAnimation from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import favoriteApi from "../../../utils/apis/favoriteApi";
import { ifCondition } from "@cloudinary/url-gen/actions/conditional";

const RealEstateDetails = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const { data, isLoading } = useQuery("realEstateDetail", () => realEstateApi.GetRealEstate(id));
    const [mostrarCompleto, setMostrarCompleto] = useState(false);
    const [containerHeight, setContainerHeight] = useState(660);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const container = document.querySelector(`.${styles.container}`);
        if (container) {
            const containerHeight = container.scrollHeight;
            setContainerHeight(containerHeight + 100);
        }
    }, [mostrarCompleto, data]);

    const setFavorite = async ({ _id }) => {
        favoriteApi.addFavorite({ userId: user._id, realestateId: _id });
    };

    const toggleMostrarCompleto = () => {
        setMostrarCompleto(!mostrarCompleto);
    };

    if (isLoading)
        return (
            <div className={styles.containerdata}>
                <div className={styles.nodata}>
                    <div>
                        <CircularProgress />
                    </div>
                </div>
            </div>
        );
    if (!data)
        return (
            <div className={styles.containerdata}>
                <div className={styles.nodata}>
                    <h2>¡Algo anda mal aquí!</h2>
                    <div className={styles.iconError}>
                        <img src={logoError} alt="icon error" />
                    </div>
                </div>
            </div>
        );

    return (
        <div style={{ width: "1300px", margin: "auto" }}>
            <div className={styles.carousel_container}>
                <Carousel height={"500px"} width={"1140px"} images={data.images} />
            </div>
            <div className={styles.container} style={{ height: mostrarCompleto ? `${containerHeight}px` : "660px" }}>
                <div className={styles.container1}>
                    <div style={{ display: "flex", height: "120px", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
                            <UseAnimation animation={heart} reverse={data.fav} fillColor="#CFE2FF" size={35} onClick={() => setFavorite(data)} />
                            <span style={{}}>Me gusta</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginRight: "30px" }}>
                            <h4 style={{ color: "#6D96FF" }}>{data?.price.toLocaleString()} €</h4>
                        </div>
                    </div>
                    <div style={{ height: "100%" }}>
                        <div className={styles.title}>
                            <p>
                                {data?.roadName}, {data?.location}
                            </p>
                            <h1>{data?.shortDescription}</h1>
                        </div>
                        <div style={{ margin: "10px 30px 10px 30px" }}>
                            <p style={{ textAlign: "justify", lineHeight: "1.6", maxHeight: mostrarCompleto ? "none" : "95px", overflow: "hidden" }}>{data?.description}</p>
                            {!mostrarCompleto && (
                                <button className={styles.buttonread} onClick={toggleMostrarCompleto}>
                                    Leer más
                                </button>
                            )}
                            {mostrarCompleto && (
                                <button className={styles.buttonread} onClick={toggleMostrarCompleto}>
                                    Leer menos
                                </button>
                            )}
                        </div>

                        {/*Esta es la parte de la columna derecha de Caracteristicas*/}
                        <div style={{ margin: "30px 30px 30px 30px" }}>
                            <div className={styles.caracteristicas}>
                                <h2>Características básicas</h2>
                                <div className={styles.columnlist}>
                                    <p style={{ paddingRight: "24px", borderRight: "1px solid", fontWeight: "700" }}>{data?.realEstateType + ": " + data?.realEstateSubtype}</p>
                                    <p style={{ paddingLeft: "24px", paddingRight: "24px", borderRight: "1px solid", fontWeight: "700" }}>{data?.metersBuilt + " m2"}</p>
                                    <p style={{ paddingLeft: "24px", paddingRight: "24px", fontWeight: "700" }}>{data?.state}</p>
                                </div>
                                <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                    <p style={{ display: "flex", flexDirection: "column" }}>
                                        {data?.properties.map((element) => {
                                            return <span key={element}>{element + " "}</span>;
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Esta es la parte de la columna derecha de Mapa y contactar */}

                <div className={styles.container2}>
                    <div style={{ display: "flex", height: "120px", justifyContent: "center" }}>
                        <TextArea toUserId={data?.user}> </TextArea>
                    </div>
                    <div className={styles.rightColumn}>
                        <GoogleMapsReactWrapper style={{ borderRadius: "20px" }}>
                            <GoogleMapsIndividual
                                center={{
                                    lat: data?.publicMapLocation?.coordinates[0],
                                    lng: data?.publicMapLocation?.coordinates[1],
                                }}
                                zoom={15}
                                style={{ width: "300px", height: "300px" }}
                            ></GoogleMapsIndividual>
                        </GoogleMapsReactWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealEstateDetails;
