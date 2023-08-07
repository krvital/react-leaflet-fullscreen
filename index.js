import L from 'leaflet';
import "leaflet.fullscreen"
import { useRef, useEffect } from "react";
import { useMap } from "react-leaflet";

export function FullscreenControl(props) {
    const map = useMap();
    const ctrl = useRef(L.control.fullscreen(props));

    useEffect(() => {
        ctrl.current.addTo(map);

        return () => {
            ctrl.current.remove();
            ctrl.current.link.remove();
        };
    });

    return null;
}

