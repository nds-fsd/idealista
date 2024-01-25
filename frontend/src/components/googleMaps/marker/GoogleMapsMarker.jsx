import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import imageBathrooms from "../../../assets/bano.svg"
import imageM2 from "../../../assets/m2.svg"
import imageRooms from "../../../assets/cama.svg"



function GoogleMapsMarker (options) {
    const {map, realestate} = options;
    const markerOptions = {map: map, position: realestate.publicposition, optimized: false}
    const [marker, setMarker] = useState();

    const contentString =
      '<div>'+
        '<div>'+
          '<Link to={`/realestates/${realEstate._id}`}>'+
            '<img style="height:170px; width=170px" src="https://img3.idealista.com/blur/WEB_DETAIL_TOP-L-L/0/id.pro.es.image.master/fd/b9/4c/1044663570.jpg" alt="Imagen inmueble"/>'+
          '</Link>'+
        '</div>'+
        '<div style="margin-top:10px; font-size:16px; font-weight:400">'+realestate.roadName+", "+realestate.roadNumber+" ("+realestate.location+')'+'</div>'+
        '<div style="margin-top:10px; font-size:16px; font-weight:700">'+realestate.price+' €</div>'+
        '<div style="margin-top:10px; display:flex; flex-direction:row; align-items:center; height:30px">'+
          '<img style="margin-right:5px; height:24px; width:24px" src='+imageRooms+' alt="Número de habitaciones" />'+
          '<label styles="font-size:16px; font-weight:400">'+realestate.rooms+' hab.</label>'+
          '<img style="margin-left:10px; margin-right:5px; height:24px; width:24px" src='+imageBathrooms+' alt="Número de baños" />'+
          '<label styles="font-size:16px; font-weight:400">'+realestate.bathrooms+' baños</label>'+
          '<img style="margin-left:10px; margin-right:5px; height:24px; width:24px" src='+imageM2+' alt="Número de baños"'+
          '<label styles="font-size:16px; font-weight:400">'+realestate.metersBuilt+' m2</label>'+
        '</div>'+
        '<div style="margin-top:10px; font-size:16px; font-weight:400; width:300px">'+realestate.shortDescription+'</div>'+
        '<div style="margin-top:10px; font-size:16px; font-weight:700">'+realestate.state+'</div>'
      '</div>'


    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: "200px",
      ariaLabel: "Label"
    })
 
    useEffect(() => {
      if (!marker) {
        setMarker(new google.maps.Marker());
      }
  
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);

    useEffect(() => {
      if (marker) {
        marker.setOptions(markerOptions);
        marker.addListener("click", () => {
          infowindow.close();
          infowindow.setContent(contentString);
          infowindow.setOptions({maxWidth: "200px"})
          infowindow.open(marker.getMap(), marker);
        })
      }
    }, [marker, markerOptions]);

    
 
    return null;
  };

  export default GoogleMapsMarker;