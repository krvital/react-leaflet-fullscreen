# FullscreenControl for react-leaflet 
Based on https://github.com/brunob/leaflet.fullscreen

### Usage example
```js
import React from "react";
import { render } from "react-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/dist/styles.css";

const App = () => {
  return (
    <div id="map">
      <MapContainer center={[54.989, 73.369]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FullscreenControl />
      </MapContainer>
    </div>
  );
};

render(<App />, document.getElementById("root"));
```


### Component props
```
position: 'topleft' | 'topright' | 'bottomright' | 'bottomleft'
title: string, // title of the button, default Full Screen
titleCancel: string // title of the button when fullscreen is on, default Exit Full Screen
content: null | HTMLElement // content of the button, can be HTML, default null
forceSeparateButton: boolean, // force seperate button to detach from zoom buttons, default false
forcePseudoFullscreen: boolean, // force use of pseudo full screen even if full screen API is available, default false
fullscreenElement: boolean // Dom element to render in full screen, false by default, fallback to map._container
```
