import React, {useRef} from "react";
import { useEffect } from "react"; // quitalo si no lo usas
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import GoogleMapsReactWrapper from "../../../components/googleMaps/reactWrapper/GoogleMapsReactWrapper";
import GoogleMaps from "../../../components/googleMaps/map/GoogleMaps";
import GoogleMapsMarker from "../../../components/googleMaps/marker/GoogleMapsMarker";
import realEstateApi from "../../../utils/apis/realEstateApi";

import styles from "./RealEstateListMap.module.css";
import imageList from "../../../assets/lista.svg";
import imageMap from "../../../assets/marcador.svg";


function RealEstateListMap(){
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const operation = queryParams.get("operation");
  const localization = queryParams.get("location");
  const realEstateType = queryParams.get("realestatetype");
  const markerRef = useRef(null);

  const { data, isLoading } = useQuery("realEstateList", () => realEstateApi.ListRealState({ operation, location: localization, realestatetype: realEstateType }))
  if (isLoading) return <div> Loading... </div>
  if (!data) return <div> Something went wrong </div>
  const mensajeerror = (data.length <= 0) ? "No se ha encontrado inmuebles" : "";
  const initMapPosition = (data.length > 0) ? data[0]?.publicposition : { lat: 39.54671316857557, lng: -3.3729938758247497}
  const initZoom = (data.length > 0) ? 13 : 6

  const urlQueryString = () => {
      return "/realestates?operation=" + operation + "&location=" + localization + "&realestatetype=" + realEstateType;
  }

  return (
      <div style={{ margin: "auto", width: "1140px", height: "100vh"}}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                  <h3>{operation + " > " + realEstateType + " > " + localization}</h3>
              </div>
              <div>
                  <ul>
                      <li className={styles.buttongray}>
                          <img style={{width: "16px", height: "16px", paddingRight: "10px"}} src={imageList} alt="Listado inmuebles"/>
                          <Link style={{textDecoration: "none"}} to={urlQueryString()} >Listado</Link>
                      </li>
                      <li className={styles.buttonblue}>
                          <img style={{width: "16px", height: "16px", paddingRight: "10px"}} src={imageMap} alt="Mapa inmuebles"/>
                          <span>Mapa</span>
                      </li>
                  </ul>
              </div>
          </div>
          <div className={styles.errormessage}>{mensajeerror}</div>

          <GoogleMapsReactWrapper>
              <GoogleMaps center={initMapPosition} zoom={initZoom} >
                  {data.map(e => <GoogleMapsMarker key={e._id} position={e?.publicposition} realestate={e} markerRef={markerRef} /> )}
              </GoogleMaps>
          </GoogleMapsReactWrapper>
      </div>
  )
}

export default RealEstateListMap;