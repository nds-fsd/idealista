import React from "react";
import { useEffect, useRef } from "react";

function GoogleMaps() {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new window.google.maps.Map(ref.current, {
                center: { lat: 48.8566, lng: 2.3522 },
                zoom: 13,
            });
        }
    }, [ref]);

    return (
        <div ref = {ref} style={{ margin: "auto", width: "1140px", height: "600px" }} />
    )
}

export default GoogleMaps;