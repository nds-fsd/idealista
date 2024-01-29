import React from "react";
import { useEffect, useRef, useState } from "react";

function GoogleMaps(props) {
    const ref = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center: props.center,
                    zoom: props.zoom
                })
            );
        }
    }, [ref, map]);

    return (
        <>
            <div ref={ref} style={props.style} />
            {                
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {map});
                })
            }
        </>
    )
}

export default GoogleMaps;