import React from "react";
import { useEffect, useRef, useState } from "react";

function GoogleMaps(props) {
    const ref = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                  new window.google.maps.Map(ref.current, {
                    center: { lat: 48.8566, lng: 2.3522 },
                    zoom: 13,}
                ));
        }
    }, [ref, map]);

    return (
        <>
            <div ref={ref} style={{ margin: "auto", width: "1140px", height: "600px" }} />
            {                
                props.children.map((child) => {
                    return React.cloneElement(child, {map});
            }
            )}
        </>
    )
}

export default GoogleMaps;