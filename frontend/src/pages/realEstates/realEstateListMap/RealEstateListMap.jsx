import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import GoogleMapsReactWrapper from "../../../components/googleMaps/reactWrapper/GoogleMapsReactWrapper";
import GoogleMaps from "../../../components/googleMaps/map/GoogleMaps";
import GoogleMapsMarker from "../../../components/googleMaps/marker/GoogleMapsMarker";
import realEstateApi from "../../../utils/apis/realEstateApi";

function RealEstateListMap(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const operation = queryParams.get("operation");
    const localization = queryParams.get("location");
    const realEstateType = queryParams.get("realestatetype");

    const { data, isLoading } = useQuery("realEstateList", () => realEstateApi.ListRealState({ operation, location: localization, realestatetype: realEstateType }))

    if (isLoading) return <div> Loading... </div>

    if (!data) return <div> Something went wrong </div>

    return (
        <div>
            <h2>{operation + " > " + localization + " > " + realEstateType}</h2>
            <GoogleMapsReactWrapper>
                <GoogleMaps center={data[0].publicposition} zoom={11} >
                    {data.map(e => <GoogleMapsMarker key={e._id} position={e.publicposition} ></GoogleMapsMarker> )}
                </GoogleMaps>
            </GoogleMapsReactWrapper>
        </div>
    )
}
  
export default RealEstateListMap;