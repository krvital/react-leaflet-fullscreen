import { createControlComponent } from '@react-leaflet/core';
import 'leaflet.fullscreen';

const FullscreenControl = createControlComponent(props => L.control.fullscreen(props))

export { FullscreenControl }
