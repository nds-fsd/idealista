import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import compartir from "../../../assets/compartir.png"
import likeImag from "../../../assets/me-gusta.png"
import demoMap from "../../../assets/map.png"

import styles from "./RealEstateDetails.module.css"
import realEstateApi from "../../../utils/realEstateApi";

import TextArea from "./TextArea";
import Carousel from "./RealEstateDetailsCarousel";


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

            <div className={`${styles.flex} ${styles.gap} ${styles.justify_center}`}>
                <div>
                    <div className={styles.buttons}>
                        <div>
                            <img src={likeImag} /> Me gusta
                        </div>
                        <div>
                            <img src={compartir} /> Compartir
                        </div>
                        <h4 style={{ color: "#6D96FF" }} >
                            {data?.price}
                        </h4>
                    </div>
                    <div className={styles.container_text}>
                        <h2> {data?.shortDescription} </h2>
                        <h3> {data?.location}</h3>
                        <small>{data?.description}</small>
                    </div>
                </div>


                <div>
                    <TextArea contactar={sendMessageToAdvisor}> </TextArea>
                    <img className={styles.map_image} src={demoMap} />
                </div>

            </div>
            <div className={`${styles.flex} ${styles.flex_column} ${styles.details_container}`}>
                <h1 >Características básicas</h1>
                <ul>
                    <li> {data?.operation}</li>
                    <li> {data?.floor}</li>
                    <li> {data?.properties}</li>
                    <li> {data?.realtor}</li>
                </ul>
            </div>
        </div >
    )

}

export default RealEstateDetails;


