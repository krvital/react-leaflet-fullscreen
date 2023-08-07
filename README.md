# FullscreenControl for react-leaflet 
It is the easiest way to add fullscreen control to your [react-leaflet](https://react-leaflet.js.org/) map. There is no fullscreen control in the standard set of leaflet controls, so here it is.

![image](https://github.com/krvital/react-leaflet-fullscreen/assets/811386/278384cf-d891-421e-822c-823d6db2d378)

### Live demo
Here is the [live demo](https://codesandbox.io/s/react-leaflet-fullscreen-v4-74kd9d) 

### Usage example
```js
import React from "react";
import { render } from "react-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/styles.css";

const App = () => {
  return (
    <div id="app">
      <MapContainer center={[54.989, 73.369]} zoom={12} scrollWheelZoom={false} id="map">
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
Since it's based on [leaflet.fullscreen](https://github.com/brunob/leaflet.fullscreen) the properties set is just passed in leaflet.fullscreen as is.

```jsx
// Position of the element. Default value is "topleft"
position: 'topleft' | 'topright' | 'bottomright' | 'bottomleft'

// Title of the button. Default value is "Full Screen"
title: string,

// Title of the button when fullscreen is on. Default value is "Exit Full Screen"
titleCancel: string 

// Content of the button. Default values is null
content: null | HTMLElement 

// Force seperate button to detach from zoom buttons. Default value if false
forceSeparateButton: boolean, 

// force use of pseudo full screen even if full screen API is available. Default value is false
forcePseudoFullscreen: boolean,
```
