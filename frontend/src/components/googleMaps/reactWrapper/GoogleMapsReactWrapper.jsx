import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function GoogleMapsReactWrapper(props) {
    const apiKey = process.env.GOOGLE_APIKEY;
    
    const render = (status) => (<div>{status}</div>);

    if (!apiKey) {
      return <div>Cannot display the map: google maps api key missing</div>;
    }
  
    return <Wrapper apiKey={apiKey} render={render}>{props.children}</Wrapper>;
  };

export default GoogleMapsReactWrapper;
