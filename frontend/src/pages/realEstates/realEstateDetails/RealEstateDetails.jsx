import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";


import realEstateApi from "../../../utils/apis/realEstateApi";
import TextArea from "./TextArea";
import Carousel from "./RealEstateDetailsCarousel";

import GoogleMapsReactWrapper from "../../../components/googleMaps/reactWrapper/GoogleMapsReactWrapper";
import GoogleMapsIndividual from "../../../components/googleMaps/map/GoogleMapsIndividual";

import styles from "./RealEstateDetails.module.css"
import compartir from "../../../assets/compartir.png"
import likeImag from "../../../assets/me-gusta.png"
// import demoMap from "../../../assets/map.png"


const RealEstateDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery('realEstateDetail', () => realEstateApi.GetRealEstate(id));

    const sendMessageToAdvisor = (messageContent) => {
        alert("Mensaje enviado")
    }

    if (isLoading) return <div>Is Loading...</div>;

    if (!data) return <div> Something went wrong</div>;

    


    return (
        <div>
            <div className={styles.carousel_container}>
                <Carousel height={500} width={1082} />
            </div>
            <div className={styles.columnContainer}>

                <div className={styles.leftColumn}>

                    <div className={styles.buttons}>
                        <div>
                            <img style={{height:"16px", width:"16px"}} src={likeImag} /> Me gusta
                        </div>
                        <div>
                            <img style={{height:"16px", width:"16px"}} src={compartir} /> Compartir
                        </div>
                        <h4 style={{ color: "#6D96FF" }} >
                            {data?.price} €
                        </h4>
                    </div>
                    
                    <div className={styles.container_text}>
                        <h2> {data?.shortDescription} </h2>
                        <h3> {data?.location}</h3>
                        <small>{data?.description}</small>
                    </div>

                    <div className={styles.caracteristicas}>
                    <h2>Características básicas</h2>
                    <div>
                        <p>{data?.realEstateType + ": " + data?.realEstateSubtype}</p>
                        <p>{data?.properties}</p>
                        <p>{data?.metersBuilt + " m2"}</p>
                        <p>{data?.state}</p>
                        <br></br>
                        <p>{data?.realtor}</p>
                    </div>

                </div>

            </div>

            <div className={styles.rightColumn}>
                <TextArea contactar={sendMessageToAdvisor}> </TextArea>
                <GoogleMapsReactWrapper>
                    <GoogleMapsIndividual
                    center={{
                        lat: data?.publicMapLocation?.coordinates[0],
                        lng: data?.publicMapLocation?.coordinates[1]
                    }}
                    zoom={15}
                    style={{ margin: "auto", width: "500px", height: "500px" }}
                    >
                    </GoogleMapsIndividual>
                </GoogleMapsReactWrapper>
            </div>
        </div>
     </div>
    )
}

export default RealEstateDetails;