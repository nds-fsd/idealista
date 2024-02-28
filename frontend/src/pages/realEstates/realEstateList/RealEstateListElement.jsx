import React from "react";
import { Link } from "react-router-dom";
import UseAnimation from "react-useanimations";
import heart from "react-useanimations/lib/heart";

import Carrusel from "../realEstateDetails/RealEstateDetailsCarousel";

import styles from "./RealEstateList.module.css";
import house_image from "../../../assets/pexels-aaron-cook-19277901 1.png";
import imageBathrooms from "../../../assets/bano.svg";
import imageM2 from "../../../assets/m2.svg";
import imageRooms from "../../../assets/cama.svg";

function RealEstateListElement({ realEstate, onFavorite, showFavorite = true}) {
  if (realEstate.images?.length === 0) realEstate.images.push(house_image);
  const backgroundFavorite = (realEstate.isFavorite) ? "#CFE2FF" : "#FFFFFF";

  console.log("realestate.element.isfavorite:", realEstate.roadName, realEstate.isFavorite, backgroundFavorite)

  return (
    <div className={styles.card}>
      <div style={{ width: "260px" }}>
        <Link to={`/realestates/${realEstate._id}`}>
          <img className={styles.image} src={realEstate.images[0]} alt="Imagen inmueble" />
        </Link>
      </div>
      <div style={{ width: "645px" }}>
        <div style={{ marginTop: "5px" }}>
          <Link className={styles.link} to={`/realestates/${realEstate._id}`}>
            <span style={{ fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>{realEstate.roadName + ", " + realEstate.roadNumber + " (" + realEstate.location + ")"}</span>
          </Link>
        </div>
        <div style={{ fontSize: "20px", fontWeight: "700" }}>{realEstate.price + " €"}</div>
        <div style={{ marginTop: "5px", display: "flex", flexDirection: "row" }}>
          <div>
            <img style={{ height: "24px", width: "24px" }} src={imageRooms} alt="Número de habitaciones" />
          </div>
          <div style={{ marginLeft: "10px" }}>{realEstate.rooms} hab.</div>
          <div>
            <img style={{ marginLeft: "10px", height: "24px", width: "24px" }} src={imageBathrooms} alt="Número de baños" />
          </div>
          <div style={{ marginLeft: "10px" }}>{realEstate.bathrooms} baños</div>
          <div>
            <img style={{ marginLeft: "10px", height: "24px", width: "24px" }} src={imageM2} alt="Metros cuadrados" />
          </div>
          <div style={{ marginLeft: "10px" }}>{realEstate.metersBuilt} m2</div>
        </div>
        <div>{realEstate.shortDescription}</div>
        <div style={{ marginTop: "5px", fontWeight: "700" }}>{realEstate.state.replace("-", " ")}</div>
      </div>
      <div style={{ width: "35" }}>
        {showFavorite && <UseAnimation animation={heart} reverse={realEstate.fav} fillColor="#CFE2FF" size={35} 
                                       onClick={() => onFavorite && onFavorite(realEstate)} />}
      </div>
    </div>
  );
}

export default RealEstateListElement;
