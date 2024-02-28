import React, { useEffect, useContext } from "react";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import UserContext from "../../../context/UserContext";

import realEstateApi from "../../../utils/apis/realEstateApi";
import Carousel from "./RealEstateDetailsCarousel";
import GoogleMapsReactWrapper from "../../../components/googleMaps/reactWrapper/GoogleMapsReactWrapper";
import GoogleMapsIndividual from "../../../components/googleMaps/map/GoogleMapsIndividual";

import styles from "./RealEstateDetails.module.css"
import compartir from "../../../assets/compartir.png"
import likeImag from "../../../assets/me-gusta.png"
import TextArea from "./TextArea"

import UseAnimation from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import favoriteApi from "../../../utils/apis/favoriteApi";

const RealEstateDetails = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext);

    const { data, isLoading } = useQuery('realEstateDetail', () => realEstateApi.GetRealEstate(id, user._id));

    const setFavorite = async ({ _id }) => {
        favoriteApi.addFavorite({ userId: user._id, realestateId: _id })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (isLoading) return <div>Is Loading...</div>;
    if (!data) return <div> Something went wrong</div>;
    data.fav = data.isFavorite;

    return (
        <div style={{ width: "1140px", margin: "auto" }}>
            <div className={styles.carousel_container}>
                <Carousel height={"500px"} width={"1140px"} images={data.images} />
            </div>

            <div className={styles.buttons}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <UseAnimation animation={heart} reverse={data.fav} fillColor="#CFE2FF" size={35} onClick={() => setFavorite(data)} />
                    <span style={{ marginLeft: "5px" }}>Me gusta</span>
                </div>
                <h4 style={{ color: "#6D96FF" }} >
                    {data?.price} €
                </h4>
                <TextArea toUserId={data?.user}> </TextArea>
            </div>

            <div className={styles.container_text}>
                <h3> {data?.shortDescription} </h3>
                <h3> {data?.location}</h3>
                <textarea style={{
                    fontSize: "16px", border: "none", outline: "none",
                    minHeight: "550px",
                    minWidth: "1140px", maxWidth: "1140px"
                }}
                    readOnly
                    value={data?.description} />
            </div>

            <div className={styles.columnContainer}>
                <div className={styles.leftColumn}>
                    <div className={styles.caracteristicas}>
                        <h2>Características básicas</h2>
                        <div>
                            <p>{data?.realEstateType + ": " + data?.realEstateSubtype}</p>
                            <p>{data?.properties.map((element) => {
                                return <span key={element}>{element + " "}</span>
                            })}</p>
                            <p>{data?.metersBuilt + " m2"}</p>
                            <p>{data?.state}</p>
                            <br></br>

                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <GoogleMapsReactWrapper>
                        <GoogleMapsIndividual
                            center={{
                                lat: data?.publicMapLocation?.coordinates[0],
                                lng: data?.publicMapLocation?.coordinates[1]
                            }}
                            zoom={15}
                            style={{ margin: "auto", width: "300px", height: "300px" }}
                        >
                        </GoogleMapsIndividual>
                    </GoogleMapsReactWrapper>

                </div>
            </div>
        </div>
    )
}

export default RealEstateDetails;