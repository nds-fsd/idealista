import React from "react";
import GoogleMapsReactWrapper from "../../../components/googleMaps/reactWrapper/GoogleMapsReactWrapper";
import GoogleMaps from "../../../components/googleMaps/map/GoogleMaps";

function RealEstateListMap(){
  
    return (
        <GoogleMapsReactWrapper>
            <GoogleMaps />
        </GoogleMapsReactWrapper>
    )
  }
  
export default RealEstateListMap;