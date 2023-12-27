import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function GoogleMapsReactWrapper(props) {
    // const api = process.env.GOOGLE_APIKEY;
    
    const apiKey = "AIzaSyCsmJe63tTXsQLbl48DP6anAFtZtfNRUo8";

    const render = (status) => (<div>{status}</div>);

    if (!apiKey) {
      return <div>Cannot display the map: google maps api key missing</div>;
    }
  
    return <Wrapper apiKey={apiKey} render={render}>{props.children}</Wrapper>;
  };

export default GoogleMapsReactWrapper;