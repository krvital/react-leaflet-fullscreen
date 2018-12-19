## FullscreenControl for react-leaflet 
based on https://github.com/brunob/leaflet.fullscreen

### Usage
```js
import 'react-leaflet-fullscreen/dist/styles.css'
import { Map } from 'react-leaflet';
import FullscreenControl from 'react-leaflet-fullscreen';

<Map zoom={16} center={[55.01964, 73.359894]} >
  <Marker position={[55.01964, 73.359894]} />
  <FullscreenControl position="topright" />
</Map>
```

### propTypes
```
position: 'topleft' | 'topright' | 'bottomright' | 'bottomleft'
title: String, // title of the button, default Full Screen
titleCancel: String // title of the button when fullscreen is on, default Exit Full Screen
content: null | HTMLElement // content of the button, can be HTML, default null
forceSeparateButton: Bool, // force seperate button to detach from zoom buttons, default false
forcePseudoFullscreen: Bool, // force use of pseudo full screen even if full screen API is available, default false
fullscreenElement: Bool // Dom element to render in full screen, false by default, fallback to map._container
```
