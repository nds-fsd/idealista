import React from "react";
import GoogleMapsReactWrapper from "../../../components/googleMaps/reactWrapper/GoogleMapsReactWrapper";
import GoogleMaps from "../../../components/googleMaps/map/GoogleMaps";
import GoogleMapsMarker from "../../../components/googleMaps/marker/GoogleMapsMarker";

function RealEstateListMap(){
  
    return (
        <GoogleMapsReactWrapper>
            <GoogleMaps>
                <GoogleMapsMarker key="re1" position={ {lat: 48.8565, lng: 2.3521} } />
                <GoogleMapsMarker key="re2" position={ {lat: 48.8604, lng: 2.3520} } />
                <GoogleMapsMarker key="re3" position={ {lat: 48.8704, lng: 2.3020} } />
            </GoogleMaps>
        </GoogleMapsReactWrapper>
    )
  }
  
export default RealEstateListMap;