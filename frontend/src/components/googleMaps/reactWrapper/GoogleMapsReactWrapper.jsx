import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper"; // Remove the unused 'Status' import


function GoogleMapsReactWrapper(props) {
    const apiKey = `${process.env.GOOGLE_APIKEY}`;
    const render = (status) => (<div>{status}</div>);

    if (!apiKey) {
      return <div>Cannot display the map: Google Maps API key missing</div>;
    }
  
    return <Wrapper apiKey={apiKey} render={render}>{props.children}</Wrapper>;
};

export default GoogleMapsReactWrapper;
