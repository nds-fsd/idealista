import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import UserContext from "../../../context/UserContext";


import realEstateApi from "../../../utils/apis/realEstateApi";
import TextArea from "./TextArea";
import Carousel from "./RealEstateDetailsCarousel";

import GoogleMapsReactWrapper from "../../../components/googleMaps/reactWrapper/GoogleMapsReactWrapper";
import GoogleMapsIndividual from "../../../components/googleMaps/map/GoogleMapsIndividual";

import styles from "./RealEstateDetails.module.css"
import compartir from "../../../assets/compartir.png"
import likeImag from "../../../assets/me-gusta.png"
import UseAnimation from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import favoriteApi from "../../../utils/apis/favoriteApi";


const RealEstateDetails = ({ onFavorite }) => {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const { data, isLoading } = useQuery('realEstateDetail', () => realEstateApi.GetRealEstate(id));

    if (isLoading) return <div>Is Loading...</div>;
    if (!data) return <div> Something went wrong</div>;

    const setFavorite = async ({ _id }) => {
        favoriteApi.addFavorite({ userId: user._id, realestateId: _id })
    }
    return (
        <div>
            <div className={styles.carousel_container}>
                <Carousel height={500} width={1082} />
            </div>

            <div className={styles.columnContainer}>
                <div className={styles.leftColumn}>
                    <div className={styles.buttons}>
                        <div>
                            <UseAnimation animation={heart} reverse={data.fav} fillColor="#CFE2FF" size={35} onClick={() => setFavorite(data)} /> Me gusta

                        </div>
                        <div>
                            <img style={{ height: "16px", width: "16px" }} src={compartir} /> Compartir
                        </div>
                        <h4 style={{ color: "#6D96FF" }} >
                            {data?.price} €
                        </h4>
                    </div>

                    <div className={styles.container_text}>
                        <h2> {data?.shortDescription} </h2>
                        <h3> {data?.location}</h3>
                        <textarea style={{
                            fontSize: "16px", border: "none", outline: "none",
                            minHeight: "300px",
                            minWidth: "650px", maxWidth: "650px"
                        }}
                            readOnly
                            value={data?.description} />
                    </div>

                    <div className={styles.caracteristicas}>
                        <h2>Características básicas</h2>
                        <div>
                            <p>{data?.realEstateType + ": " + data?.realEstateSubtype}</p>
                            <p>{data?.properties.map((element) => {
                                return <span>{element + " "}</span>
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
                    <TextArea toUserId={data?.owner}> </TextArea>
                </div>
            </div>

        </div>
    )
}

export default RealEstateDetails;