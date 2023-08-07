'use strict';

var L = require('leaflet');
require('leaflet.fullscreen');
var react = require('react');
var reactLeaflet = require('react-leaflet');

function FullscreenControl(props) {
    const map = reactLeaflet.useMap();
    const ctrl = react.useRef(L.control.fullscreen(props));

    react.useEffect(() => {
        ctrl.current.addTo(map);

        return () => {
            ctrl.current.remove();
            ctrl.current.link.remove();
        };
    });

    return null;
}

exports.FullscreenControl = FullscreenControl;
