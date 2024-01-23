import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./GoogleMapsMarker.module.css";
import house_image from "../../../assets/pexels-aaron-cook-19277901 1.png"
import imageBathrooms from "../../../assets/bano.svg"
import imageM2 from "../../../assets/m2.svg"
import imageRooms from "../../../assets/cama.svg"



function GoogleMapsMarker (options) {
    const {map, realestate} = options;
    const markerOptions = {map: map, position: realestate.publicposition, optimized: false}
    const [marker, setMarker] = useState();

    
/*     const contentString =
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading">Uluru</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "sandstone rock formation in the southern part of the " +
      "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
      "south west of the nearest large town, Alice Springs; 450&#160;km " +
      "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
      "features of the Uluru - Kata Tjuta National Park. Uluru is " +
      "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
      "Aboriginal people of the area. It has many springs, waterholes, " +
      "rock caves and ancient paintings. Uluru is listed as a World " +
      "Heritage Site.</p>" +
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
      "(last visited June 22, 2009).</p>" +
      "</div>" +
      "</div>"; */

      const contentString =
        '<div>'+
          '<Link to={`/realestates/${realEstate._id}`}>'+
            '<img className="styles.image" src="../../../assets/pexels-aaron-cook-19277901 1.png" alt="Imagen inmueble"/>'+
          '</Link>'+
        '</div>'+
        '<div style="font-size:20px; font-weight:700">'+realestate.price+' €</div>'+
        '<div style="margin-top:5px; display:flex, flex-direction:row">'+
          '<div><img style="height:24px; width:24px" src=""../../../assets/cama.svg" alt="Número de habitaciones" /></div>'+
          '<div style="margin-left:10px">'+realestate.rooms+' hab.</div>'+
          '<div><img style="marginLeft:"10px; height:24px; width:24px" src="../../../assets/bano.svg" alt="Número de baños" /></div>'+
          '<div style="margin-left:10px">'+realestate.bathrooms+' baños</div>'+
          '<div><img style="margin-left:10px; height:24px; width:24px" src=""../../../assets/m2.svg"" alt="Metros cuadrados" /></div>'+
          '<div style="margin-left:10px">'+realestate.metersBuilt+' m2</div>'+
        '</div>'+
        '<div>'+realestate.shortDescription+'</div>'+
        '<div style="margin-top:5px; font-weight:700">'+realestate.state+'</div>'

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
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
          infowindow.open(marker.getMap(), marker);
        })
      }
    }, [marker, markerOptions]);

    
 
    return null;
  };

  export default GoogleMapsMarker;